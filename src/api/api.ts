import axios, { AxiosRequestConfig } from "axios";
import { LOCAL_STORAGE_KEY } from "../contant";

// 새로운 accessToken을 발급받는 함수
const getNewAccessToken = async (
  refreshToken: string | null
): Promise<string> => {
  try {
    const response = await axios.post("/auth/kakao/token", { refreshToken });
    const { access_token } = response.data;
    return access_token; // 새로 발급된 accessToken 반환
  } catch (error) {
    console.error("새로운 accessToken 발급 실패", error);
    throw new Error("Failed to refresh access token");
  }
};

export const createClient = (config?: AxiosRequestConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY.accessToken);
  const refreshToken = localStorage.getItem(LOCAL_STORAGE_KEY.refreshToken);

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
    withCredentials: true,
    ...config,
  });

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log("error!!", error);

      // 금지된 요청 처리 (로그인 안 한 경우)
      if (error.response.status === 403) {
        return Promise.reject("접근 금지: 로그인 필요");
      }

      // 권한이 없을 때 (Unauthorized)
      if (error.response.status === 401) {
        console.log("권한 없음 에러");

        if (!refreshToken) {
          window.location.replace("/login");
          return Promise.reject("refresh token이 없습니다.");
        }

        try {
          // 새로운 Access Token 발급 시도
          const newAccessToken = await getNewAccessToken(refreshToken);
          localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, newAccessToken);

          // 원래 요청을 새로운 accessToken으로 다시 시도
          if (error.config) {
            error.config.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(error.config);
          } else {
            return Promise.reject(
              new Error("Original request config is not available")
            );
          }
        } catch (tokenError) {
          // 토큰 재발급 실패 시 로그인 페이지로 리다이렉트
          localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
          localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
          window.location.replace("/login");
          return Promise.reject(tokenError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export const httpClient = createClient();

type RequestMethod = "get" | "post" | "put" | "delete" | "patch";

// 요청 메서드를 위한 핸들러
export const requestHandler = async <T>(
  method: RequestMethod,
  url: string,
  payload?: T
) => {
  let response;

  switch (method) {
    case "post":
      response = await httpClient.post(url, payload);
      break;
    case "get":
      response = await httpClient.get(url);
      break;
    case "put":
      response = await httpClient.put(url, payload);
      break;
    case "patch":
      response = await httpClient.patch(url, payload);
      break;
    case "delete":
      response = await httpClient.delete(url);
      break;
  }

  return response.data;
};

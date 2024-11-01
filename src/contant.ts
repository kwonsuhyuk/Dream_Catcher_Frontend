export const LOCAL_STORAGE_KEY = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

export const KAKAO_REDIRECT_URL = "http://localhost:5173/oauth";

export const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_REST_API_KEY
}&redirect_uri=${KAKAO_REDIRECT_URL}&response_type=code`;

import { httpClient } from "./api";

export const kakaoLogin = async (code: string | null) => {
  const response = await httpClient.post(
    "/auth/kakao",
    {},
    {
      params: { code },
    }
  );

  return response?.data;
};

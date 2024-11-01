import { useMutation } from "@tanstack/react-query";
import { kakaoLogin } from "../api/auth.api";
import useUserStore from "../store/store";
import { LOCAL_STORAGE_KEY } from "../contant";

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const { mutate: loginFn, isError } = useMutation({
    mutationFn: (code: string) => kakaoLogin(code),
    onSuccess: (data) => {
      setUser({
        name: data?.name,
        profileImg: data?.profileImg,
        uid: data?.uid,
        id: data?.id,
      });

      // 로컬스토리지에 토큰 저장
      localStorage.setItem(LOCAL_STORAGE_KEY.accessToken, data.accessToken);
      localStorage.setItem(LOCAL_STORAGE_KEY.refreshToken, data.refreshToken);

      window.location.href = "/";
    },
    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const logoutFn = () => {
    clearUser();
    localStorage.removeItem(LOCAL_STORAGE_KEY.accessToken);
    localStorage.removeItem(LOCAL_STORAGE_KEY.refreshToken);
    window.location.href = "/mypage";
  };

  return { loginFn, isError, logoutFn };
};

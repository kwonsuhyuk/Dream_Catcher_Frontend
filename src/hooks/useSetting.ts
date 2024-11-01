import { useMutation } from "@tanstack/react-query";
import { setTemplate, setUserInfo } from "../api/setting.api";
import useUserStore from "../store/store";

export const useSettings = () => {
  const setUser = useUserStore((state) => state.setUser);
  const { mutate: setTemplateFn } = useMutation({
    mutationFn: (type: string) => setTemplate(type),

    onError: (error) => {
      throw new Error(error.message);
    },
  });

  const { mutate: setUserInfoFn } = useMutation({
    mutationFn: (variables: { name: string; profileImg: File | null }) =>
      setUserInfo(variables.name, variables.profileImg),

    onSuccess: (data) => {
      setUser({
        name: data?.name,
        profileImg: data?.profileImg,
        uid: data?.uid,
        id: data?.id,
      });
      window.location.href = "/mypage";
    },

    onError: (error) => {
      throw new Error(error.message);
    },
  });

  return { setTemplateFn, setUserInfoFn };
};

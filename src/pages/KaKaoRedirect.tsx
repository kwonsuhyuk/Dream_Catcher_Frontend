import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";

const KaKaoRedirect = () => {
  const { loginFn, isError } = useLogin();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      loginFn(code);
    }
  }, [loginFn]);

  if (isError) {
    return <Error />;
  }

  return <Loading />;
};

export default KaKaoRedirect;

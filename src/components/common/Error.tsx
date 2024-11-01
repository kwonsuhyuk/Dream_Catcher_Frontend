import { useNavigate, useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

export default function Error() {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  return (
    <div className="bg-main text-white h-screen w-screen flex justify-center items-center flex-col">
      <h1>오류가 발생했습니다.</h1>
      <p>다음과 같은 오류가 발생했습니다.</p>
      <p>{error.statusText || error.message}</p>

      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-third text-white p-2 rounded-full hover:bg-secondary transition duration-300">
        뒤로가기
      </button>
    </div>
  );
}

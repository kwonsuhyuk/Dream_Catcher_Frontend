import { kakaoURL } from "../../contant";
import kakaoImg from "../../assets/kakao_login.png";

const KaKaoLoginButton = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <button onClick={handleKakaoLogin}>
      <img src={kakaoImg} alt="kakao" />
    </button>
  );
};

export default KaKaoLoginButton;

import { GrTemplate } from "react-icons/gr";
import { IoPersonCircleSharp } from "react-icons/io5";
import Menubar from "../components/mypage/Menubar";
import { FaQuestion, FaShareAlt, FaSignOutAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";
import PageTitle from "../components/common/PageTitle";
import useUserStore from "../store/store";
import KaKaoLoginButton from "../components/mypage/KaKaoLoginButton";
import { useLogin } from "../hooks/useLogin";
import { BsMoonStarsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const userData = useUserStore((state) => state);
  const { logoutFn } = useLogin();
  const navigator = useNavigate();

  return (
    <div className="w-full overflow-y-auto pb-32">
      {/* 페이지 제목 */}
      <PageTitle title="MY PAGE" />
      {userData.uid ? (
        <>
          <div className="w-full h-[30vh] my-16 flex flex-col justify-center items-center bg-gradient-to-r from-secondary to-third text-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col justify-center items-center gap-9 py-5 rounded-xl">
              <img
                src={userData.profileImg!}
                alt="프로필이미지"
                className="w-20 h-20 rounded-full"
              />
              <p>{userData.name}</p>
              {/* 출석횟수나 뱃지 흭득갯수 등등 뭔가 동기부여될 수 있는 부분 넣기 */}
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-10">
            <Menubar
              title="프로필 수정"
              icon={<IoPersonCircleSharp />}
              onClick={() => navigator("editprofile")}
            />
            <Menubar
              title="일기 템플릿 설정"
              icon={<GrTemplate />}
              onClick={() => navigator("edittemplate")}
            />
            <Menubar title="나의 뱃지" icon={<SlBadge />} />
          </div>
        </>
      ) : (
        <div className="w-full h-[50vh] my-16 flex flex-col justify-center items-center bg-gradient-to-r from-secondary to-third text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-md title flex gap-3 items-center">
            <BsMoonStarsFill className="text-yellow-300" /> Dream Catcher
          </h1>
          <p className="text-lg text-center mb-12 drop-shadow-md">
            간편하게 로그인하고
            <br />
            다양한 서비스를 이용해보세요.
          </p>
          <KaKaoLoginButton />
        </div>
      )}

      {/* 기타 */}
      <div className="flex flex-col gap-3 mb-10">
        <Menubar title="자주 하는 질문" icon={<FaQuestion />} />
        <Menubar title="친구와 공유하기" icon={<FaShareAlt />} />
        <Menubar title="의견 보내기" icon={<LuPencilLine />} />
      </div>
      {userData.uid && (
        <div className="flex flex-col gap-3 mb-10">
          <Menubar
            title="로그아웃"
            icon={<FaSignOutAlt />}
            onClick={logoutFn}
          />
        </div>
      )}

      {/* 버전표기 */}
      <div className="flex justify-center text-gray-500">Version 1.0.0</div>
    </div>
  );
};

export default Mypage;

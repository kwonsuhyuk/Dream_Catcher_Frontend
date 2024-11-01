import { AiFillAliwangwang } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { IoHomeSharp, IoPersonCircleSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const NAVITEMS = [
  {
    icon: <FaBookOpen />,
    name: "일기",
    path: "/diary",
  },
  {
    icon: <AiFillAliwangwang />,
    name: "AI해몽",
    path: "/interpretation",
  },
  {
    icon: <IoHomeSharp />,
    name: "홈",
    path: "/",
  },
  {
    icon: <GrAnalytics />,
    name: "통계",
    path: "/analisis",
  },
  {
    icon: <IoPersonCircleSharp />,
    name: "마이",
    path: "/mypage",
  },
];

const Navbar = () => {
  const navigator = useNavigate();
  const location = useLocation();

  return (
    <div
      className="w-full flex gap-3 px-4 py-0 mx-auto my-0 min-w-[320px] justify-around
      max-w-maxWidth fixed left-0 right-0 bottom-0
      bg-secondary text-white border-t-[1px] border-secondary">
      {NAVITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <div
            key={item.name}
            onClick={() => navigator(item.path)}
            className={`flex flex-col items-center justify-center gap-2 px-2 py-4 font-medium cursor-pointer
              ${
                isActive ? "border-t-2 border-white" : ""
              } // 활성화 시 흰색 보더 추가
            `}>
            <div className="text-xl">{item.icon}</div>
            <div className="text-xs">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

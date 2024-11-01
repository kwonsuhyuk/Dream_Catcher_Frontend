import { MdArrowForwardIos } from "react-icons/md";

interface MenuBarProps {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
}

const Menubar = ({ title, icon, onClick }: MenuBarProps) => {
  return (
    <div
      className="flex justify-between items-center px-5 bg-secondary py-2 rounded-lg"
      onClick={onClick}>
      <div className="flex items-center gap-5">
        {icon}
        {title}
      </div>
      <MdArrowForwardIos />
    </div>
  );
};

export default Menubar;

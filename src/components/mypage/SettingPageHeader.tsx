import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface SettingPageHeaderProps {
  title: string;
}

const SettingPageHeader = ({ title }: SettingPageHeaderProps) => {
  const navigator = useNavigate();
  return (
    <div className="flex justify-between items-center text-base mt-2">
      <div onClick={() => navigator(-1)}>
        <FaArrowLeft />
      </div>
      <div>{title}</div>
      <div></div>
    </div>
  );
};

export default SettingPageHeader;

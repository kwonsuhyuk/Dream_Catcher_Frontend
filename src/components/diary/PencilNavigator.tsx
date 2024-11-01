import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PencilNavigator = () => {
  const navigate = useNavigate();
  const handleNavigateWrite = () => {
    navigate("/writediary");
  };
  return (
    <div
      onClick={handleNavigateWrite}
      className="absolute bottom-2 right-2 bg-secondary text-white p-5 rounded-full hover:bg-third">
      <FaPencil />
    </div>
  );
};

export default PencilNavigator;

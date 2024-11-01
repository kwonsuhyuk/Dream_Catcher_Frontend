import { TDiaries } from "../../types";
import PencilNavigator from "./PencilNavigator";

interface ListViewProps {
  diaries: TDiaries;
}

const ListView = ({ diaries }: ListViewProps) => {
  return (
    <div className="relative">
      {diaries.map((diary) => (
        <div>{diary.title}</div>
      ))}
      <PencilNavigator />
    </div>
  );
};

export default ListView;

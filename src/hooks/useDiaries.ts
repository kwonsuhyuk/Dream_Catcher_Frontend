import { useQuery } from "@tanstack/react-query";
import { getDiaries } from "../api/diary.api";
import { checkType } from "../types";

export const useDiaries = (type: checkType = "calendar") => {
  const { data: diariesData, isLoading: isDiariesLoading } = useQuery({
    queryKey: ["diaries", type],
    queryFn: () => getDiaries(type),
    retry: false,
  });
  return {
    diaries: diariesData?.diaries || [],
    isDiariesLoading,
  };
};

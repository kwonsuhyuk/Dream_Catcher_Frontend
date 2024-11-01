import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteDiary, getDiary } from "../api/diary.api";

export const useDiary = (diaryId: number) => {
  const { data: diaryData, isLoading: isDiaryLoading } = useQuery({
    queryKey: ["diary", diaryId],
    queryFn: () => getDiary(diaryId),
  });

  const { mutate: deleteDiaryFn } = useMutation({
    mutationFn: (diaryId: number) => deleteDiary(diaryId),
  });

  return {
    diaryData,
    deleteDiaryFn,
    isDiaryLoading,
  };
};

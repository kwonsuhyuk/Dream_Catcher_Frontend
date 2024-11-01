import { checkType } from "../types";
import { httpClient } from "./api";

// 일기 전체 조회
export const getDiaries = async (type: checkType) => {
  const response = await httpClient.get("/diaries", {
    params: { type },
  });
  return response.data;
};

// 단일 일기 조회
export const getDiary = async (diaryId: number) => {
  const response = await httpClient.get(`/diaries/${diaryId}`);

  return response.data;
};

// 일기 삭제
export const deleteDiary = async (diaryId: number) => {
  const response = await httpClient.delete(`/diaries/${diaryId}`);

  return response.data;
};

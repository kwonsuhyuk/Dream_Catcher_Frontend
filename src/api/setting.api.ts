import { httpClient } from "./api";

export const setTemplate = async (type: string = "beginner") => {
  const response = await httpClient.patch("/users/template", { type });

  return response.data;
};

export const setUserInfo = async (
  name: string | null,
  profileImg: File | null
) => {
  console.log(name, profileImg, "in api");

  if (!name) {
    throw new Error("이름은 필수 입력사항입니다.");
  }

  const formData = new FormData();
  formData.append("name", name);

  if (profileImg) {
    formData.append("profileImage", profileImg);
  } else {
    console.log("No profile image selected");
  }

  // 요청 보내기
  const response = await httpClient.patch("/users/profile", formData);
  return response.data;
};

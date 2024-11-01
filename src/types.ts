export type TContent = {
  sections: Array<{ section: string; detail: string }>;
  freeContent: string | null;
};

export type TTag = {
  id: number;
  name: string;
};

export type TTemplateType = "beginner" | "expert" | "free";

export type TDiary = {
  id: number;
  title: string;
  contents: TContent;
  createdAt: string;
  templateType: TTemplateType;
  image: string | null;
  interpretation: string | null;
  tags: TTag[];
};

export type TDiaries = TDiary[];

export type checkType = "calendar" | "list";

export type TUser = {
  name: string | null;
  email: string | null;
  id: number | null;
  profileImg: string | null;
  provider: "kakao";
  uid: string | null;
  accessToken: string | null;
  refreshToken: string | null;
};

export type TStoreUser = {
  name: string | null;
  profileImg: string | null;
  uid: string | null;
  id: number | null;
};

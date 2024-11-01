import React, { useState } from "react";
import SettingPageHeader from "../../components/mypage/SettingPageHeader";
import useUserStore from "../../store/store";
import { useSettings } from "../../hooks/useSetting";

const EditProfilePage: React.FC = () => {
  const { name, profileImg } = useUserStore((state) => state);
  const [newName, setNewName] = useState<string | null>(name);
  const [newProfileImg, setNewProfileImg] = useState<File | null>(null);
  const { setUserInfoFn } = useSettings();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewProfileImg(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    if (!newName?.trim()) {
      alert("이름을 입력해 주세요.");
      return;
    }

    setUserInfoFn({ name: newName, profileImg: newProfileImg });
  };

  return (
    <div>
      <SettingPageHeader title="Edit Profile" />
      <div className="flex flex-col items-center mt-10">
        <img
          src={profileImg!}
          alt="profileImg"
          className="w-24 h-24 rounded-full shadow-lg"
        />
        <p className="text-2xl font-semibold mt-2">{name}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center py-10 my-10 bg-secondary shadow-md rounded-lg p-5 w-full max-w-md mx-auto focus:ring-4">
        <input
          type="text"
          value={newName!}
          onChange={(e) => setNewName(e.target.value)}
          className="p-2 rounded text-black bg-white w-full mb-4 focus:outline-none"
          placeholder="이름을 입력하세요"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-3 mb-16 w-full text-sm
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-main file:text-white
                     hover:file:bg-third"
        />
        <button
          type="submit"
          className="bg-third text-white py-2 px-4 rounded-full shadow-md hover:bg-main transition duration-200">
          프로필 수정
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;

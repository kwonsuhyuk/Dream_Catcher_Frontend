import React, { useState } from "react";
import SettingPageHeader from "../../components/mypage/SettingPageHeader";
import { useSettings } from "../../hooks/useSetting";

const TEMPLATES = [
  {
    value: "Beginner",
    description: "초보자용 설명하기",
  },
  {
    value: "Expert",
    description: "숙련자용 설명하기",
  },
  {
    value: "Free",
    description:
      "제목과 내용을 통해서 자유롭게 일기를 적을 수 있는 자유 템플릿입니다.",
  },
];

const EditTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("Beginner");
  const { setTemplateFn } = useSettings();

  const handleTemplateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTemplate(e.target.value);
    setTemplateFn(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <SettingPageHeader title="Edit Template" />

      <div className="mt-10 grid gap-4 w-full">
        {TEMPLATES.map((template) => (
          <label
            key={template.value}
            className={`flex items-start text-white gap-3 p-4
              rounded-lg cursor-pointer w-full ${
                selectedTemplate !== template.value
                  ? "bg-secondary"
                  : "bg-third"
              } transition-colors duration-200`}>
            <input
              type="radio"
              name="template"
              value={template.value}
              checked={selectedTemplate === template.value}
              onChange={handleTemplateChange}
              className=""
            />

            <div>
              <span className="font-medium">{template.value}</span>
              <p className="text-sm mt-1">{template.description}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default EditTemplate;

import React, { useState } from "react";
import LookbookInfo from "../components/LookbookInfo";
import LookbookMain from "../components/LookbookMain";
import LookbookPicker from "../components/LookbookPicker";

const LookBook: React.FC = () => {
  const [memberName, setMemberName] = useState<string>("jungkook");
  return (
    <>
      <LookbookInfo memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
    </>
  );
};

export default LookBook;

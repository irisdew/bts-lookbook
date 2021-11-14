import React, { useState } from "react";
import LookBookHeader from "../components/LookbookHeader";
import LookbookMain from "../components/LookbookMain";
import LookbookPicker from "../components/LookbookPicker";

const LookBook: React.FC = () => {
  const [memberName, setMemberName] = useState<string>("jungkook");
  return (
    <>
      <LookBookHeader memberName={memberName} />
      <LookbookMain />
      <LookbookPicker setMemberName={setMemberName} />
    </>
  );
};

export default LookBook;

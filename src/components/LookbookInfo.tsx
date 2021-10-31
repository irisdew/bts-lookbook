import React from "react";
import styled from "styled-components";

interface LookBookInfoProps {
  memberName: string;
}

interface IMemberName {
  len: number;
}

const LookbookInfo: React.FC<LookBookInfoProps> = ({ memberName }) => {
  return (
    <Wrapper>
      <MemberName len={memberName.length}>{memberName}</MemberName>
      <MemberImage src={"/images/lookbook-jungkook.png"} />
      <Eclipse />
    </Wrapper>
  );
};

export default LookbookInfo;

const Wrapper = styled.div`
  min-height: 480px;
  position: relative;
`;

const MemberName = styled.span<IMemberName>`
  text-transform: uppercase;
  color: #6b6b6b;
  font-size: ${(props) => (props.len > 5 ? "240px" : props.len > 1 ? "400px" : "500px")};
  line-height: ${(props) => (props.len > 5 ? "210px" : props.len > 1 ? "350px" : "415px")};
  position: absolute;
  z-index: 5;
  left: ${(props) => (props.len > 3 ? "50%" : "64%")};
  bottom: 0;
  transform: translate(-50%, 0);
`;

const MemberImage = styled.img`
  height: 450px;
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
`;

const Eclipse = styled.div`
  background: #47219f;
  width: 220px;
  height: 400px;
  margin: 0 1em 0 0;
  position: absolute;
  left: 54%;
  bottom: 0;
  border-bottom-right-radius: 400px;
  border-top-right-radius: 400px;
`;

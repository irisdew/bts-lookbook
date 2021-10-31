import React from "react";
import styled from "styled-components";

interface IBar {
  top: string;
  bottom: string;
}

const LookBookMain: React.FC = () => {
  return (
    <>
      <SwipeContainer>
        <ContentTable>
          <Label>BRAND</Label>
          <Content>구찌</Content>
          <Label>CATEGORY</Label>
          <Content>상의</Content>
          <Label>COLOR</Label>
          <Content>
            <ColorChip color="black" />
          </Content>
          <Label>FEATURES</Label>
          <Content>반팔, 하프넥, 스트라이프 패턴</Content>
          <Label>PRICE</Label>
          <Content>KRW 3,000,000</Content>
        </ContentTable>
        <Bar top="600px" bottom="" />
        <MemberPhoto alt="lookbook" src="/images/lookbook/v_01.png" />
        <MemberCloth alt="lookbook" src="/images/lookbook/v_01_cloth.png" />
        <Bar bottom="350px" top="" />
      </SwipeContainer>
      <SwiperNav>
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
        <NavCard />
      </SwiperNav>
    </>
  );
};

export default LookBookMain;

const SwipeContainer = styled.div`
  position: relative;
  max-width: 1200px;
  min-height: 850px;
  margin: 100px auto 30px;
`;

const MemberPhoto = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 600px;
`;

const MemberCloth = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 350px;
`;

const Bar = styled.div<IBar>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  background-color: #000;
  width: 100%;
  height: 13px;
  z-index: -10;
`;

const ContentTable = styled.div`
  position: absolute;
  bottom: 400px;
  width: 500px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 2fr;
  text-align: left;
`;

const Label = styled.span`
  grid-column: 1;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #5f5f5f;
`;

const Content = styled.span`
  display: flex;
  align-items: center;
  grid-column: 2;
  padding: 10px;
  font-size: 15px;
  color: #7e7e7e;
`;

const ColorChip = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 2px;
  background-color: ${(props) => props.color};
`;

const SwiperNav = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1440px;
  margin: 30px auto 100px;
`;

const NavCard = styled.div`
  width: 140px;
  height: 200px;
  border-radius: 20px;
  background-image: url("/images/lookbook/v_01.png");
  background-size: cover;
  margin: 0 6px;
`;

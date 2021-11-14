import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface LookBookMainProps {
  lookbookData: {
    brand: string;
    category: string;
    colorchip: string;
    features: string[];
    price: string;
    memberPhoto: ImageData;
    memberCloth: ImageData;
  };
}

interface IBar {
  top: string;
  bottom: string;
}

const LookBookMain: React.FC = () => {
  const [currentCardId, setCurrentCardId] = useState(1);

  useEffect(() => {
    console.log(currentCardId);
  }, [currentCardId]);

  const onClickLeftArrow = () => {
    setCurrentCardId((prev) => (prev > 1 ? prev - 1 : prev - 1 + 8));
  };

  const onClickRightArrow = () => {
    setCurrentCardId((prev) => (prev < 8 ? prev + 1 : prev + 1 - 8));
  };

  const onClickNavCard = (e: any) => {
    setCurrentCardId(e.target.dataset.id);
  };

  return (
    <>
      <Card>
        <Arrow alt="left_arrow" src="/images/left_arrow.png" onClick={onClickLeftArrow} />
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
        <Arrow alt="right_arrow" src="/images/right_arrow.png" onClick={onClickRightArrow} />
      </Card>
      <SwiperNav>
        <NavCard data-id={1} onClick={onClickNavCard} />
        <NavCard data-id={2} onClick={onClickNavCard} />
        <NavCard data-id={3} onClick={onClickNavCard} />
        <NavCard data-id={4} onClick={onClickNavCard} />
        <NavCard data-id={5} onClick={onClickNavCard} />
        <NavCard data-id={6} onClick={onClickNavCard} />
        <NavCard data-id={7} onClick={onClickNavCard} />
        <NavCard data-id={8} onClick={onClickNavCard} />
      </SwiperNav>
    </>
  );
};

export default LookBookMain;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto 30px;
`;

const Arrow = styled.img`
  cursor: pointer;
  margin: 0 50px;
`;

const SwipeContainer = styled.div`
  position: relative;
  max-width: 1200px;
  width: 1100px;
  min-height: 850px;
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
  cursor: pointer;
  :hover {
    filter: grayscale(50%);
  }
`;

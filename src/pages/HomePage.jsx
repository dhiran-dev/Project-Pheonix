import React from "react";
import styled from "styled-components";
import Arrow from "../assets/Arrow_1.png";
import "./HomePage.css"

const HomePage = () => {
  return (
    <Container>
      <TopSection></TopSection>
      <BottomSection>
        <InfoSection>
          <InfoContent>
            <Circle>
              <Number>1</Number>
            </Circle>
            <Text>Set Goal</Text>
          </InfoContent>
          <img src={Arrow} />
          <InfoContent>
            <Circle>
              <Number>2</Number>
            </Circle>
            <Text>Update Daily Progress</Text>
          </InfoContent>
          <img src={Arrow} />
          <InfoContent>
            <Circle>
              <Number>3</Number>
            </Circle>
            <Text>Track Progress</Text>
          </InfoContent>
          <img src={Arrow} />
          <InfoContent>
            <Circle>
              <Number>4</Number>
            </Circle>
            <Text>Complete milestone</Text>
          </InfoContent>
        </InfoSection>
        <ButtonSection></ButtonSection>
      </BottomSection>
    </Container>
  );
};

const Container = styled.div`
  width: 80vw;
  height: 90vh;
  background: black;
  margin: auto;
  margin-top: 40px;
`;

const TopSection = styled.div`
  width: 100%;
  height: 50%;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 50%;
`;

const InfoSection = styled.div`
  width: 100%;
  height: 70%;
  margin: auto;
  display: flex;
`;

const ButtonSection = styled.div`
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InfoContent = styled.div`
  position: relative;
  top: 15%;
  width: 210px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Circle = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background: #d9d9d9;
  color: black;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Number = styled.span`
  position: relative;
  top: 18%;
  left: 0;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  color: #000000;
`;

const Text = styled.div`
  position: relative;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 35px;
  color: #ffffff;
  width: 100%;
  text-align: center;
  margin: auto;
`;

const ArrowImg = styled.div`
  background-image: url(../assets/Arrow_1.png);
  width: 100px;
  height: 100px;
`;

export default HomePage;

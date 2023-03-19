import React from "react";
import styled from "styled-components";
import Arrow from "../assets/Arrow_1.png";
// import "./HomePage.css";
import Icon from "../assets/Fire_icon.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Container>
      <TopSection>
        <TitleSection>
          <Title>Project Phoenix</Title>
        </TitleSection>
        <SubTitle>
          Resurrect to be the best version of yourself by exploring
          your fitness!
        </SubTitle>
        <Description>
          Project Phoenix is the right tool to track & update your fitness
          progress on a weekly basis keeping you updated about your upcoming
          weight loss goals
        </Description>
      </TopSection>
      <BottomSection>
        <InfoSection>
          <InfoContent>
            <Circle>
              <Number>1</Number>
            </Circle>
            <Text>Set Goal</Text>
          </InfoContent>
          <img src={Arrow} className="arrow" />
          <InfoContent>
            <Circle>
              <Number>2</Number>
            </Circle>
            <Text>Update Daily Progress</Text>
          </InfoContent>
          <img src={Arrow} className="arrow" />
          <InfoContent>
            <Circle>
              <Number>3</Number>
            </Circle>
            <Text>Track Progress</Text>
          </InfoContent>
          <img src={Arrow} className="arrow" />
          <InfoContent>
            <Circle>
              <Number>4</Number>
            </Circle>
            <Text>Complete milestone</Text>
          </InfoContent>
        </InfoSection>
        <ButtonSection>
          <StartButton type="submit" onClick={navigateHandler}>
            <TextSpan>Let's get Started</TextSpan>
            <ButtonIcon src={Icon} />
          </StartButton>
        </ButtonSection>
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
  padding: 0 20px;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;

  @media screen and (max-width: 1536px) {
    width: 80%;
    margin-top: 0;
  }

  @media screen and (max-width: 768px) {
    width: 60vw;
    max-width: 800px;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`;

const TopSection = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::after {
    content: "";
    border-bottom: 1px solid white;
    width: 80%;
    display: block;
    margin: 0 auto;
  }
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

  .arrow {
    width: 133px;
    height: 30px;
    position: relative;
    top: -15%;
    margin: auto -200px;
  }

  @media screen and (max-width: 1536px) {
  margin-top : 20px;
  
  }
`;

const ButtonSection = styled.div`
  margin: auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1536px) {
  margin-top : 20px;
  
  }
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

  @media screen and (max-width: 1536px) {
    width: 80px;
    height: 80px;
  }
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

  @media screen and (max-width: 1536px) {
    top: 0;
    font-weight: 700;
    font-size: 50px;
  }
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

  @media screen and (max-width: 1536px) {
  margin-top : 20px;
  font-weight: 400;
  font-size: 30px;
  
  }
`;

const StartButton = styled.button`
  width: 450px;
  height: 65px;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  background: black;
  color: white;

  :hover {
    color: black;
    background: linear-gradient(90deg, #ee0979 0%, #ff6a00 100%), #000000;
    border: none;
    transition: 0.2s ease-in-out;
  }
`;
const TextSpan = styled.span`
  position: relative;
  left: -45%;
`;

const ButtonIcon = styled.img`
  width: 40px;
  height: 46px;
  position: relative;
  top: -3%;
  left: 1%;
  margin: auto -200px;
`;

const TitleSection = styled.div`
  height: 20%;
`;

const Title = styled.h1`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  background: linear-gradient(90deg, #ee0979 0%, #ff6a00 100%), #c1c1c1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 1536px) {
    font-weight: 700;
    font-size: 60px;
  }
`;

const SubTitle = styled.h3`
  position: relative;
  top: 10%;
  height: 40%;
  width: 60%;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 54px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #c1c1c1;

  @media screen and (max-width: 1536px) {
    font-size: 35px;
  }
`;

const Description = styled.p`
  height: 40%;
  width: 70%;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #c1c1c1;

  @media screen and (max-width: 1536px) {
    font-size: 25px;
  }
`;
export default HomePage;

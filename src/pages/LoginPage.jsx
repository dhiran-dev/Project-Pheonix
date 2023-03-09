import React from "react";
import Login from "../components/Login";
import styled from "styled-components";


const LoginPage = () => {
  return (
    <Container>
      <HeaderContent>
        <Title>Project Pheonix</Title>
        <SubTitle>“One Step, One punch, One Round at a time”</SubTitle>
      </HeaderContent>
      <LoginSection>
        <Login />
      </LoginSection>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const HeaderContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 10px;
  margin: 15px;
`;

const Title = styled.h1`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 115px;
  background: linear-gradient(90deg, #ee0979 0%, #ff6a00 100%), #c1c1c1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.h3`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 43px;
  margin-top: -60px;

  background: linear-gradient(
      90deg,
      #8bdeda 0%,
      #43add0 25%,
      #998ee0 50%,
      #e17dc2 75%,
      #ef9393 100%
    ),
    linear-gradient(
      90deg,
      #ff75c3 0%,
      #ffa647 20%,
      #ffe83f 40%,
      #9fff5b 60%,
      #70e2ff 80%,
      #cd93ff 100%
    ),
    linear-gradient(90deg, #d4fc79 0%, #96e6a1 100%),
    linear-gradient(90deg, #2980b9 0%, #2c3e50 100%), #c1c1c1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoginSection = styled.div`
  position: relative;
  left: 38%;
  top: 20%;
  width: 441px;
  height: 500px;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
  border-radius: 4px;
`;

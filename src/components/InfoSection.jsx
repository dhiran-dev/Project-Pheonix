import React from "react";
import styled from "styled-components";
import setgoal from "../assets/setgoal.png";

const InfoSection = () => {
  return (
    <Container>
      <InputField1>
        Your Maintenance Calories for the week is <input />
      </InputField1>
      <InputField2>
        <input /> Calories to be burned in this week including 1 rest days and 6
        active days. You should burn <input /> Calories for a day, you might
        reach <input /> goal weight of the week
      </InputField2>
      <SetGoalButton>
        Set Goal
        <SetGoalIcon src={setgoal} />
      </SetGoalButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 39%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 40px;
`;
const InputField1 = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  color: #bababa;
  /* margin-top: -60px;
  margin-bottom: 0px; */

  input {
    height: 40px;
    border: 1px solid white;
    border-radius: 5px;
    color: teal;
    background: black;
    margin-top: 10px;
    width: 100px;
    font-size: 20px;
    text-align: center;
  }
`;

const InputField2 = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;

  text-align: center;
  color: #bababa;
  max-width: 892px;

  input {
    height: 30px;
    border: 1px solid white;
    border-radius: 5px;
    color: teal;
    background: black;
    margin-top: 10px;
    width: 60px;
    font-size: 20px;
    text-align: center;
  }
`;

const SetGoalButton = styled.button`
  width: 230px;
  height: 55px;
  position: relative;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: black;
  background: black;
  border-radius: 4px;
  background: linear-gradient(
    270deg,
    rgba(227, 244, 191, 0) -198.75%,
    #61ff00 -134.11%,
    #4bba6a -53.81%,
    #34c69a 18.52%,
    #2cc9b2 49.89%,
    #1fcfda 80.45%
  );
  transition: 0.2s ease-in;

  :hover {
    background: black;
    border: 1px solid white;
    color: white;
    transition: 0.2s ease-in;
  }
`;

const SetGoalIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;
export default InfoSection;

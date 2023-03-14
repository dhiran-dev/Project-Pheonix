import React from "react";
import styled from "styled-components";
import Calculate from "../assets/Calculate.png";
import { useSelector, useDispatch } from "react-redux";
import {
  updateRate,
  updateGoalCalories,
  updateGoalWeight,
} from "../features/goal/goalSlice";

const CalculateGoal = () => {
  const dispatch = useDispatch();
  const currentWeight = useSelector((state) => state.goal.currentWeight);
  const rate = useSelector((state) => state.goal.rate);
  const maintainance = useSelector((state) => state.goal.maintainance);

  const handleRateLevelChange = (event) => {
    dispatch(updateRate(event.target.value));
  };

  const CalculateDefecit = (e) => {
    e.preventDefault();
    console.log("Maintainance", maintainance, "rate", rate);
    const defecit = Number(maintainance) + Number(rate);
    // console.log(defecit);
    dispatch(updateGoalCalories(defecit));

    //Updating goal weight
    if (rate == "7700") {
      dispatch(updateGoalWeight(currentWeight - 1));
    } else if (rate == "5390") {
      dispatch(updateGoalWeight(currentWeight - 0.7));
    } else if (rate == "3500") {
      dispatch(updateGoalWeight(currentWeight - 0.5));
    }
  };

  return (
    <Container>
      <Card>
        <Title>Choose your goal</Title>
        <FormSection>
          <InputField>
            <label name="rate" htmlFor="rate">
              Rate of weight loss expected
            </label>
            <select name="rate" id="rate" onChange={handleRateLevelChange}>
              <option value="" disabled selected>
                select
              </option>
              <option value="3500">0.5 KG</option>
              <option value="5390">0.7 KG</option>
              <option value="7700">1 KG</option>
            </select>
            <p>1% of Current Wt is recommended per week</p>
          </InputField>
          <InputField>
            <CalculateButton onClick={CalculateDefecit}>
              Calculate
              <CalculateIcon src={Calculate} />
            </CalculateButton>
          </InputField>
        </FormSection>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: Black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 27.5%;

  @media screen and (min-width: 1200px) {
    min-height: 150px;
    margin-bottom: 40px;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid teal;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  width: 30%;
  color: #c2c0c0;
  margin-left: 30px;
  margin-bottom: 10px;
  margin-top: 20px;

  @media screen and (min-width: 1200px) {
    min-width: 600px;
    min-height: 80px;
    margin-bottom: -10px;
    margin-top: -10px;
    font-size: 30px;
  }
`;

const FormSection = styled.form`
  width: 100%;
  height: 70%;
  color: White;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 210px;

  @media screen and (min-width: 1200px) {
    position: relative;
    left: 210px;
    top: -30px;
    height: 80%;
  }

  input {
    height: 50px;
    border: 1px solid white;
    border-radius: 5px;
    color: White;
    background: black;
    margin-top: 10px;
    width: 120px;
    font-size: 26px;
    text-align: center;
  }

  label {
    font-family: "Inria Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #c2c0c0;

    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }

  p {
    font-family: "Inria Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #c2c0c0;

    @media screen and (min-width: 1200px) {
      margin-top: 5px;
    }
  }

  select {
    height: 100px;
    border-radius: 5px;
    background: black;
    color: white;
    border: 1px solid white;
    font-size: 26px;
    text-align: center;
    margin-top: 10px;
    width: 150px;

    @media screen and (min-width: 1200px) {
      height: 150px;
      width: 100px;
      font-size: 22px;
    }
  }
`;

const InputField = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;

  @media screen and (min-width: 1200px) {
    height: 120px;
  }
`;

const CalculateButton = styled.button`
  width: 214px;
  height: 53px;
  position: relative;
  margin-top: -10px;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  background: black;
  border-radius: 4px;
  background: linear-gradient(90deg, #ee0979 0%, #ff6a00 100%), #000000;
  transition: 0.2s ease-in;

  :hover {
    background: black;
    border: 1px solid white;
    transition: 0.2s ease-in;
  }
`;

const CalculateIcon = styled.img``;
export default CalculateGoal;

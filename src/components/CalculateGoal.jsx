import React from "react";
import styled from "styled-components";
import Calculate from "../assets/Calculate.png";

const CalculateGoal = () => {
  return (
    <Container>
      <Card>
        <Title>Choose your goal</Title>
        <FormSection>
          <InputField>
            <label name="rate" htmlFor="rate">
              Rate of weight loss expected
            </label>
            <select name="rate" id="rate">
              <option value="1">1%</option>
              <option value="1.5">1.5%</option>
              <option value="2">2%</option>
            </select>
            <p>1% of Current Wt is recommended per week</p>
          </InputField>
          <InputField>
            <CalculateButton>
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
`;

const Card = styled.div`
  width: 90%;
  height: 90%;
  border: 1px solid white;
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
`;

const FormSection = styled.form`
  width: 100%;
  height: 70%;
  color: White;
  display: flex;
  justify-content: center;
  align-items: center;

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
  }
`;

const InputField = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
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
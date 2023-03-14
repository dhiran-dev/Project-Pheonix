import React from "react";
import styled from "styled-components";
import logicon from "../assets/createlog.png";

const UpdateProgress = () => {
  return (
    <Container>
      <Card>
        <Title>Update your progress</Title>
        <FormSection>
          <InputField>
            <label name="date" htmlFor="date">
              Date
            </label>
            <input name="date" id="date" type="date" />
            <p>Select date</p>
          </InputField>
          <InputField>
            <label name="weight" htmlFor="weight">
              Current Weight (Kg)
            </label>
            <input name="weight" id="weight" type="number" min="40" max="200" />
            <p>Weight in empty stomach</p>
          </InputField>
          <InputField>
            <label name="Calburnt" htmlFor="Calburnt">
              Calories burnt (Cal)
            </label>
            <input
              name="Calburnt"
              id="Calburnt"
              type="number"
              min="0"
              max="3000"
            />
            <p>Active Calories burnt for the date selected</p>
          </InputField>

          <InputField>
            <label name="CalIntake" htmlFor="CalIntake">
              Intake Calories (Cal)
            </label>
            <input
              name="CalIntake"
              id="CalIntake"
              type="number"
              min="0"
              max="3000"
            />
            <p>Intake followed from goal created</p>
          </InputField>

          <InputField>
            <label name="Intermittent" htmlFor="Intermittent">
              Intermittent Fasting
            </label>
            <select name="Intermittent" id="Intermittent">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <p>Followed Intermittent Fasting?</p>
          </InputField>
          <InputField2>
            <LogButton>
              Create Log
              <Logo src={logicon} />
            </LogButton>
          </InputField2>
        </FormSection>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 34%;
  display: flex;
  flex-direction: column;
  align-items: center;
 margin-bottom : -40px;
`;

const Card = styled.div`
  width: 95%;
  height: 75%;
  border: 0.5px solid darkslategray;
  border-radius: 10px;
  margin-top: 15px;
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
    background: darkslategray;
    margin-top: 10px;
    width: 140px;
    padding-left: 14px;
    font-size: 18px;
    display: flex;
    justify-content: center;
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
    background: darkslategray;
    color: white;
    border: 1px solid white;
    font-size: 20px;
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

const InputField2 = styled.div`
  width: 30%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

const LogButton = styled.button`
  position: relative;
  top: -10px;
  width: 197px;
  height: 61px;
  display: flex;
  border-radius: 4px;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
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
  padding: 30px;

  :hover {
    background: black;
    border: 1px solid white;
    color: white;
    transition: 0.2s ease-in;
  }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: -17px;
  left: 205px;
`;

export default UpdateProgress;
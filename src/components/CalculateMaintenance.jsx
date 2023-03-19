import React from "react";
import styled from "styled-components";
import Calculate from "../assets/Calculate.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  updateCurrentWeight,
  updateActivityLevel,
  updateMaintainance,
} from "../features/goal/goalSlice";

const CalculateMaintenance = () => {
  const dispatch = useDispatch();
  const currentWeight = useSelector((state) => state.goal.currentWeight);
  const activityLevel = useSelector((state) => state.goal.activityLevel);
  // const user = useSelector((state) => state.auth.userID);
  // const token = useSelector((state) => state.auth.token);

  const handleCurrentWeightChange = (event) => {
    dispatch(updateCurrentWeight(event.target.value));
  };

  const handleActivityLevelChange = (event) => {
    dispatch(updateActivityLevel(event.target.value));
  };

  const calculateMaintainence = (e) => {
    e.preventDefault();
    if (activityLevel == "" || currentWeight == "") {
      alert("Please fill all the fields to calculate maintainance");
      return;
    }
    const CalculatedMaintainance = currentWeight * 2.2 * activityLevel;
    // console.log(CalculatedMaintainance.toFixed(1));
    dispatch(updateMaintainance(CalculatedMaintainance.toFixed(1)));
  };

  return (
    <Container>
      <Card>
        <Title>Calculate your maintainence calories</Title>
        <FormSection onSubmit={calculateMaintainence}>
          <InputField>
            <label name="weight" htmlFor="weight">
              Current Weight (Kg)
            </label>
            <input
              name="weight"
              id="weight"
              type="number"
              min="40"
              max="200"
              onChange={handleCurrentWeightChange}
              required
              step="0.1"
            />
            <p>Min-40Kg to Max - 200Kg</p>
          </InputField>

          <InputField>
            <label name="Activity" htmlFor="Activity">
              Activity level
            </label>
            <select
              name="Activity"
              id="Activity"
              onChange={handleActivityLevelChange}
              defaultValue=""
              required
            >
              <option value="0" disabled>
                Select
              </option>
              <option value="13">Sedentary (No Workout)</option>
              <option value="14">
                Moderately Active(1 or 3 times per week)
              </option>
              <option value="16">Very Active (Daily workout)</option>
            </select>
            <p>Daily Activity level</p>
          </InputField>
          <InputField>
            <CalculateButton>
              Calculate
              <CalculateIcon src={Calculate} />
            </CalculateButton>
          </InputField>
        </FormSection>
        {/* {console.log(
          "Current weight is ",
          currentWeight,
          "Current Activity level is",
          activityLevel
        )} */}
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
    min-height: 250px;
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

    @media screen and (min-width: 1200px) {
      width: 110px;
    }
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
      font-size: 20px;
      height: 70px;
      width: 120px;
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

export default CalculateMaintenance;

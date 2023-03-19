import React from "react";
import styled from "styled-components";
import setgoal from "../assets/setgoal.png";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoSection = () => {
  const maintainance = useSelector((state) => state.goal.maintainance);
  const goalCalories = useSelector((state) => state.goal.goalCalories);
  const goalWeight = useSelector((state) => state.goal.goalweight);
  const currentWeight = useSelector((state) => state.goal.currentWeight);
  const rate = useSelector((state) => state.goal.rate);
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    async function postGoal() {
      try {
        const userid = localStorage.getItem("userID");
        const authheader = localStorage.getItem("userToken");
        const data = {
          userID: userid,
          maintainance,
          goalCalories,
          goalWeight,
          currentWeight,
          rate,
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
            authheader: authheader,
            userid: userid,
          },
        };
        // console.log(config);
        const response = await axios.post(
          "http://localhost:8080/api/goal/latest-goal",
          data,
          config
        );
        console.log(response.data.message);
        if (response.status === 201) {
          window.alert("Goal has been set successfully.");
        } else if (response.status === 400) {
          console.log(response.data.message);
          window.alert(response.data.message);
        } else {
          alert(`Unexpected response status: ${response.status}`);
          console.log(`Unexpected response status: ${response.status}`);
        }
        return response;
      } catch (error) {
        console.log(error.response);
        const errorMessage = error.response.data.message || "An error occurred";
        window.alert(errorMessage);
      }
    }
    if (isFetching) {
      postGoal();
      setisFetching(false);
    }
  }, [isFetching]);

  const sendGoaltoBackend = (e) => {
    e.preventDefault();
    setisFetching(true);
  };
  return (
    <Container>
      <InputField1>
        Your Maintenance Calories for the week is{" "}
        <input type="text" value={maintainance} readOnly />
      </InputField1>
      <InputField2>
        <input type="text" value={goalCalories} readOnly /> Calories to be
        burned in this week including 1 rest days and 6 active days. You should
        burn{" "}
        <input type="text" value={(goalCalories / 6).toFixed(1)} readOnly />
        Calories for a day, you might reach{" "}
        <input type="text" value={goalWeight} readOnly /> goal weight of the
        week
      </InputField2>
      <SetGoalButton onClick={sendGoaltoBackend}>
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

  @media screen and (max-width: 1536px) {
    margin: 0;
    padding: 0;
    position: relative;
    top: -30px;
  }
`;
const InputField1 = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  color: #bababa;
  margin-bottom: -40px;

  @media screen and (max-width: 1536px) {
  font-size : 24px;
  font-weight : 200px;
  margin-bottom: 0
  }
  }

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

    @media screen and (max-width: 1536px) {
    height : 35px;
    width : 65px;
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

  @media screen and (max-width: 1536px) {
    font-size: 24px;
    font-weight: 200;
    margin-bottom: 15px;
  }

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

  @media screen and (min-width: 1200px) {
    width: 180px;
    height: 50px;
  }

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

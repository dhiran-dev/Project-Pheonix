import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "./Progress.css";

const Progress = () => {
  const refreshData = useSelector((state) => state.log.refreshData);
  console.log(refreshData);
  const goalWeight = refreshData.goalWeight;
  const lastUpdatedWeight = +refreshData.LastUpdatedWeight;
  const startingWeight = +refreshData.startingWeight;
  console.log(goalWeight, lastUpdatedWeight, startingWeight);
  const weightDifference = startingWeight - goalWeight;
  const progress = startingWeight - lastUpdatedWeight;
  const percentage = (progress / weightDifference) * 100;
  console.log(percentage, progress, weightDifference);
  return (
    <Container>
      <Title>Goal Progress: </Title>
      <ProgressBar>
        <div className="progress-bar">
          <div
            className="progress-bar__fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </ProgressBar>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 95%;
  height: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: black;
  border: 1px solid teal;
`;

const Title = styled.h3`
  padding: 0;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #c2c0c0;
  margin-left: 30px;

  margin-top: 20px;
  margin-right: 0;
`;
const ProgressBar = styled.div`
  width: 80%;
  margin: auto; ;
`;

export default Progress;

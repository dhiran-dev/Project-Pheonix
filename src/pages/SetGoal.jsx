import React from "react";
import styled from "styled-components";
import CalculateGoal from "../components/CalculateGoal";
import CalculateMaintenance from "../components/CalculateMaintenance";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import { useState } from "react";

const SetGoal = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [Actvitylevel, setActivitylevel] = useState("");

  const handleCurrentWeight = (setWeightChild) => {
    setCurrentWeight(setWeightChild);
  };

  const handleActivitylevel = (setActivityChild) => {
    setActivitylevel(setActivityChild);
    console.log(setActivityChild);
  };

  const calculateMaintainence = (e) => {
    e.preventDefault();
    console.log(currentWeight);
    console.log(Actvitylevel);
    const Maintainance = currentWeight * 2.2 * Actvitylevel;
    console.log(Maintainance);
  };
  return (
    <Container>
      <Header />
      <CalculateMaintenance
        setWeight={handleCurrentWeight}
        setActivity={handleActivitylevel}
        calcMaintainance={calculateMaintainence}
      />
      <CalculateGoal />
      <InfoSection />
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    min-height: 720px;
  }
`;

export default SetGoal;

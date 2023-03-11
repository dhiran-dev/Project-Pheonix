import React from "react";
import styled from "styled-components";
import CalculateGoal from "../components/CalculateGoal";
import CalculateMaintenance from "../components/CalculateMaintenance";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";

const SetGoal = () => {
  return (
    <Container>
      <Header />
      <CalculateMaintenance />
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
`;

export default SetGoal;

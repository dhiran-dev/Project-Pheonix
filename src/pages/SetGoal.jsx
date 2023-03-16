import React from "react";
import styled from "styled-components";
import CalculateGoal from "../components/CalculateGoal";
import CalculateMaintenance from "../components/CalculateMaintenance";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SetGoal = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

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

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    min-height: 720px;
  }
`;

export default SetGoal;

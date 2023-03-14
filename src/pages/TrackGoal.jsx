import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

import UpdateProgress from "../components/UpdateProgress";
import Progress from "../components/Progress";
import ViewLogs from "../components/ViewLogs";

const TrackGoal = () => {
  return (
    <Container>
      <Header />
      <UpdateProgress />
      <Progress />
      <ViewLogs />
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
  align-items: center;
  overflow: hidden;
`;

export default TrackGoal;

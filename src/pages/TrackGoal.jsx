import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

import UpdateProgress from "../components/UpdateProgress";
import Progress from "../components/Progress";
import ViewLogs from "../components/ViewLogs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TrackGoal = () => {
  const navigate = useNavigate();
  const { loading, userID, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userID) {
      navigate("/login");
    }
  }, [navigate, userID]);
  return (
    <Container>
      <Header />
      <UpdateProgress />
      {/* <Progress /> */}
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

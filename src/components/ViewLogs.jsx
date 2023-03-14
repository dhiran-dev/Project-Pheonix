import React from "react";
import styled from "styled-components";

const ViewLogs = () => {
  return (
    <Container>
      <LogCard></LogCard>
      <LogCard></LogCard>
      <LogCard></LogCard>
      <LogCard></LogCard>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  padding: 0;
  width: 95%;
  height: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: #000000;
`;

const LogCard = styled.div`
  width: 85%;
  height: 74px;
  background: #092020;
  margin : 20px;
  border-radius : 4px;
`;
export default ViewLogs;

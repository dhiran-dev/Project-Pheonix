import React from "react";
import styled from "styled-components";
import Refresh from "../assets/Refresh.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { updateRefreshData } from "../features/createLog/CreateLog";
import { useDispatch, useSelector } from "react-redux";

const ViewLogs = () => {
  const dispatch = useDispatch();
  const [refreshLogs, setRefreshLogs] = useState(false);
  const refreshData = useSelector((state) => state.log.refreshData);

  const handleRefresh = (e) => {
    e.preventDefault();
    setRefreshLogs(true);
  };

  useEffect(() => {
    async function refreshLog() {
      try {
        const userid = localStorage.getItem("userID");
        const authheader = localStorage.getItem("userToken");
        console.log(userid, "   ", authheader);
        const data = {
          userID: userid,
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
          "http://localhost:8080/api/refreshlogs/get-logs",
          data,
          config
        );
        console.log(response.data.message);
        if (response.status === 200) {
          window.alert("Log fetched successfully");
          console.log(response.data);
          dispatch(updateRefreshData(response.data));
        } else if (response.status === 404) {
          window.alert(response.message);
        }
        return response;
      } catch (error) {
        console.log(error, "error has been occures, dhiran");
        console.log(error.response);
        const errorMessage = error.response.data.message || "An error occurred";
        window.alert(errorMessage);
      }
    }
    if (refreshLogs) {
      refreshLog();
      console.log(refreshLogs, "refresh happening");
      setRefreshLogs(false);
      console.log("refresh complted");
    }
  }, [refreshLogs]);

  // return refreshData ? (
  //   <Container>
  //     <LogSection>
  //       {refreshData &&
  //         refreshData.logs &&
  //         refreshData.logs.length > 0 &&
  //         refreshData.logs.map((log) => (
  //           <LogCard key={log._id}>
  //             <Box>Date : {log.date}</Box>
  //             <Box>Weight : {log.weight}</Box>
  //             <Box>Cal. Burnt : {log.caloriesBurnt}</Box>
  //             <Box>Cal. Intake : {log.CalorieIntake}</Box>
  //             <Box>Intermittent : {log.Intermittent}</Box>
  //           </LogCard>
  //         ))}
  //     </LogSection>

  //     <RefreshButton>
  //       <RefreshImg src={Refresh} onClick={handleRefresh} />
  //     </RefreshButton>
  //   </Container>
  // ) : null;
  // console.log(refreshData);
  return refreshData && refreshData.logs && refreshData.logs.length > 0 ? (
    <Container>
      <LogSection>
        {refreshData.logs.map((log) => (
          <LogCard key={log._id}>
            <Box>Date : {log.date}</Box>
            <Box>Weight : {log.weight}</Box>
            <Box>Cal. Burnt : {log.caloriesBurnt}</Box>
            <Box>Cal. Intake : {log.CalorieIntake}</Box>
            <Box>Intermittent : {log.Intermittent}</Box>
          </LogCard>
        ))}
      </LogSection>

      <RefreshButton>
        <RefreshImg src={Refresh} onClick={handleRefresh} />
      </RefreshButton>
    </Container>
  ) : (
    <Container>
      <MessageContainer>
        <Message>Refresh to view old logs</Message>
      </MessageContainer>

      <RefreshButton>
        <RefreshImg src={Refresh} onClick={handleRefresh} />
      </RefreshButton>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 10px;
  padding: 0;
  width: 95%;
  height: 65%;
  display: flex;

  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #000000;

  @media (max-width: 768px) {
    height: auto;
    width: auto;
    /* overflow-x: visible ; */
  }
`;

const MessageContainer = styled.div`
  height: 200px;
  width: 70%;
  display : flex;
  justify-content : center;
  align-items : center;
`;
const Message = styled.h1`
  
  width: auto;
`;
const LogSection = styled.div`
  width: 90%;
  margin-right: 0;
  height: 100%;
  overflow: auto;

  ::-webkit-scrollbar {
    /* ... */
    transform: rotate(180deg); /* Rotate the scrollbar by 180 degrees */
  }
`;

const LogCard = styled.div`
  width: 90%;
  height: 74px;
  background: #092020;
  margin: 20px auto;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: auto;
    height: 120px;
  }
`;

const Box = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  height: 100%;
  margin: auto;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 150px;
    height: auto;
    /* overflow-y: auto; */
    margin: auto;

    :first-child {
      width: 180px;
    }
  }
`;

const RefreshButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const RefreshImg = styled.img`
  position: relative;

  width: 50px;
  height: 50px;
  padding: 10px;

  :hover {
    position: relative;
    padding: 10px;
    background-color: #232222;
    border-radius: 5px;
  }
`;
export default ViewLogs;

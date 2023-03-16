import React from "react";
import styled from "styled-components";
import Pheonix from "../assets/phoenix.png";
// import settings from "../assets/settings_icon.png";
import { NavLink } from "react-router-dom";
// import "./Header.css";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userID");
    dispatch(logoutSuccess());
  };
  return (
    <Container>
      <TitleSection>
        <Title>Project Pheonix</Title>
        <Logo src={Pheonix} />
      </TitleSection>
      <NavSection>
        <NavElement>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Home
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink
            to="/setgoal"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Set Goal
          </NavLink>
        </NavElement>
        <NavElement>
          <NavLink
            to="/trackgoal"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Track Progress
          </NavLink>
        </NavElement>
        {/* <NavElement>
          <NavLink to="/settings" className="settings">
            <Settings src={settings} />
          </NavLink>
        </NavElement> */}
        <NavElement>
          <NavLink to="/" onClick={handleLogout}>
            Log out
          </NavLink>
        </NavElement>
      </NavSection>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7%;

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    min-height: 70px;
  }
`;

const TitleSection = styled.div`
  position: relative;
  display: flex;
  width: 295px;
  height: 55px;
  margin: 0 10px;
`;

const NavSection = styled.div`
  width: 730.57px;
  background: black;
  height: 55px;
  margin: 0 10px;
  display: flex;

  @media screen and (min-width: 1200px) {
    min-width: 730px;
  }
`;

const Title = styled.div`
  position: relative;
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
  left: 72%;
  top: 2%;
`;

const NavElement = styled.div`
  font-family: "Inria Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  text-align: center;
  color: #989898;

  a {
    text-decoration: none;
    color: white;

    :hover {
      padding: 5px 10px;
      border-radius: 4px;
      background: darkslategray;
      color: whitesmoke;
    }
  }
`;

const Settings = styled.img`
  width: 40px;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
`;
export default Header;

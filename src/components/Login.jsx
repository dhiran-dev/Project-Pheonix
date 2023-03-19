import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import signupicon from "../assets/signup_icon.png";
import signinicon from "../assets/signin_icon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.auth.userID);
  // const token = useSelector((state) => state.auth.token);
  // let initial = true;
  let tempToken = "";
  let userId = "";

  let strength = 0;
  let validations = [];
  const [PassStrenght, setPassStrenght] = useState(0);
  const [testPass, setTestPass] = useState([false, false, false, false]);
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { loading, userID, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const validatePassword = (e) => {
    const password = e.target.value;
    let test = [...testPass];
    if (password.length > 5) {
      test[0] = true;
      setTestPass(test);
    } else {
      test[0] = false;
      setTestPass(test);
    }

    if (password.search(/[A-Z]/) > -1) {
      test[1] = true;
      setTestPass(test);
    } else {
      test[1] = false;
      setTestPass(test);
    }

    if (password.search(/[0-9]/) > -1) {
      test[2] = true;
      setTestPass(test);
    } else {
      test[2] = false;
      setTestPass(test);
    }

    if (password.search(/[$&+,:;=?@#]/) > -1) {
      test[3] = true;
      setTestPass(test);
    } else {
      test[3] = false;
      setTestPass(test);
    }
    validations = [
      password.length > 5,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[$&+,:;=?@#]/) > -1,
    ];
    strength = validations.reduce((acc, cur) => acc + cur, 0);
    setPassStrenght(strength);

    if (PassStrenght == "4") {
      setUserPassword(e.target.value);
    }
  };

  const emailInputHandler = (e) => {
    setUserEmail(e.target.value);
  };

  //Handle Sign-up functionality
  const signupHandler = async (e) => {
    e.preventDefault();
    if (userEmail == "" || userPassword == "") {
      alert("Please enter valid Email and Password");
      return;
    }
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
        userPassword,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("signup successful, Please login now with your credentials");
      navigate("/login");
    } else {
      alert(
        "Email already exists, please sign up with unique credentials or login with existing email"
      );
    }
    console.log(data);
  };

  //Handle Login functionality
  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:8080/api/auth/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userEmail,
  //       userPassword,
  //     }),
  //   });

  //   const data = await response.json();
  //   if (data.accessToken && data._id) {
  //     tempToken = data.accessToken;
  //     userId = data._id;
  //     initial = false;
  //     localStorage.setItem("token", tempToken);
  //     alert("login successful");
  //     dispatch(loginSuccess({ token: tempToken, userID: userId }));
  //     navigate("/trackgoal");
  //   } else {
  //     alert("Please check your username and password");
  //   }

  //   console.log(user);
  //   console.log(tempToken);
  //   console.log(token);
  // };

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     userEmail,
  //     userPassword,
  //   };
  //   try {
  //     await dispatch(loginUser(user));
  //     alert("Login successful");
  //     navigate("/trackgoal");
  //   } catch (error) {
  //     alert("Please check your username and password");
  //   }
  // };

  useEffect(() => {
    if (userID) {
      navigate("/trackgoal");
    }
  }, [navigate, userID]);

  const loginHandler = (e) => {
    e.preventDefault();
    if (userEmail == "" || userPassword == "") {
      alert("Please enter valid Email and Password");
      return;
    }
    dispatch(userLogin({ userEmail, userPassword }));
  };

  return (
    <>
      <form>
        <div className="field">
          <input
            type="email"
            name="email"
            className="input"
            placeholder=""
            onInput={emailInputHandler}
            required
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>

        <div className="field">
          <input
            type={showPassword ? "text" : "password"}
            className="input"
            placeholder=""
            onInput={validatePassword}
            required
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <span
            className="toggle-password"
            onMouseEnter={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <div className="strength">
          <span
            className={"bar bar-1" + (PassStrenght > 0 ? " bar-show" : "")}
          />
          <span
            className={"bar bar-2" + (PassStrenght > 1 ? " bar-show" : "")}
          />
          <span
            className={"bar bar-3" + (PassStrenght > 2 ? " bar-show" : "")}
          />
          <span
            className={"bar bar-4" + (PassStrenght > 3 ? " bar-show" : "")}
          />
        </div>

        <ul>
          <li className="validation">
            {" "}
            {testPass[0] ? "✔️" : "❌"} must be at least 5 characters
          </li>
          <li className="validation">
            {" "}
            {testPass[1] ? "✔️" : "❌"} must contain a capital letter
          </li>
          <li className="validation">
            {" "}
            {testPass[2] ? "✔️" : "❌"} must contain a number
          </li>
          <li className="validation">
            {testPass[3] ? "✔️" : "❌"} must contain one of $&+,:;=?@#
          </li>
        </ul>
        <div className="buttonsection">
          <button
            disabled={PassStrenght < 4}
            className="btn login"
            onClick={loginHandler}
          >
            Login
            <img src={signinicon} />
          </button>
          <button
            disabled={PassStrenght < 4}
            className="btn signup"
            onClick={signupHandler}
          >
            <span className="btn-span">
              Sign up
              <img src={signupicon} />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

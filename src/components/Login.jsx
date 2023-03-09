import React from "react";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  let strength = 0;
  let validations = [];
  const [PassStrenght, setPassStrenght] = useState(0);
  const [testPass, setTestPass] = useState([false, false, false, false]);
  const [showPassword, setShowPassword] = useState(false);

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
  };

  return (
    <>
      <form>
        <div className="field">
          <input type="email" name="email" className="input" placeholder="" />
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
          <li> {testPass[0] ? "✔️" : "❌"} must be at least 5 characters</li>
          <li> {testPass[1] ? "✔️" : "❌"} must contain a capital letter</li>
          <li> {testPass[2] ? "✔️" : "❌"} must contain a number</li>
          <li>{testPass[3] ? "✔️" : "❌"} must contain one of $&+,:;=?@#</li>
        </ul>

        <button disabled={PassStrenght < 4}>Sign Up</button>
      </form>
    </>
  );
};

export default Login;

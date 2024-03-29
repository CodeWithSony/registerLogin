import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";
import { register, login } from "../../actions/auth";


const Auth = () => {
  const [isRegister, setisRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSwitch = () => {
    setisRegister(!isRegister);
  };

  const dispatch = useDispatch();
  // dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter email and password...");
    }
    if (isRegister) {
      if (!name) {
        alert("Enter a name...");
      }
      dispatch(register({ name, email, password }, navigate));
      setisRegister(!isRegister)
      // Dispatch basically triggers the action 
// And action is responsible for changing the state of application (means adding, removing or updating the data of application)

    } else {
      dispatch(login({ email, password }, navigate));
    }

    console.log({ name, email, password });
  };

  return (
    <section className="auth-section">
      {isRegister }
      <div className="auth-container-2">
        {/* auth-container */}
        {isRegister }
        <form onSubmit={handlerSubmit}>
          {isRegister && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="name"
              id="username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isRegister && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
        
          </label>

        

            {isRegister }



          <button type="submit" className="auth-btn">
            {isRegister ? "Register" : "Log in"}
          </button>

          {isRegister && (
            <p style={{ color: "666767", fontSize: "13px" }}>
              By clicking "Register" you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of <br /> service{" "}
              </span>
              <span style={{ color: "#007ac6" }}>privacy policy and </span>
              <span style={{ color: "#007ac6" }}>cookie policy.</span>
            </p>
          )}
        </form>
        <p>
          {isRegister ? "already have an account" : "Don't have an account"}
          <button
            type="button"
            onClick={handleSwitch}
            className="handle-switch-btn"
          >
            {isRegister ? "Log in" : "Register"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;



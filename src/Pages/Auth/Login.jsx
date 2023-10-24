import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [error, settError] = useState({});
  const token = localStorage.getItem("token");
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const handleDashNavigate = () => {
    navigate("/dashboard");
  };

  const resetAllState = () => {
    setUserData({});
    settError({});
  };

  useEffect(() => {
    if (token) {
      return navigate("/dashboard");
    }
  }, [token]);

  const handleLogin = async () => {
    try {
      resetAllState();
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUserData(response.data);
    } catch (err) {
      settError(err);
    }
  };

  useEffect(() => {
    if (userData.id) {
      handleDashNavigate();
    }
  }, [userData]);

  return (
    <div className="container">
      <div className="row col-md-12 d-flex align-items-center justify-content-center align-self-center">
        <div className="col-md-4" style={{ marginTop: "100px" }}>
          <label className="form-control-label">UserName: {username}</label>
          <input
            className="form-control"
            value={username}
            name="username"
            onChange={handleOnChange}
          />
          <label className="form-control-label">Passowrd: {password}</label>
          <input
            className="form-control"
            type="password"
            name="passsord"
            value={password}
            onChange={handleOnChange}
          />
          <button className="btn btn-success" onClick={handleLogin}>
            Login
          </button>
          <div style={{ marginTop: "50px" }}>
            {userData.id && (
              <div className="alert alert-success" id="successMessage">
                {`Hi! Welcome ${userData.firstName} ${userData.lastName}`}
              </div>
            )}
            {error.message && (
              <div className="alert alert-danger" id="errorMessage">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

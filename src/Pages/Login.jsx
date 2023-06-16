import React, { useState } from "react";

import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  function loginClicked() {
    if (username === "YASKARRI" && password === "1234") {
      toast.success("🦄 Woow!! Login Success!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/Loading");
    } else {
      toast.error("oops!! Wrong credentials", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <div className="container m-5">
      <div className="d-flex p-4 border shadow-lg">
        <div className="d-flex-lg-7 p-5">
          <h1 className="display-3 fw-bold">LogIn</h1>
          <div className=" col mt-4">
            <input
              type="text"
              name="username"
              className="form-control"
              style={{ width: "300px" }}
              placeholder="Enter Your User Id"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
          </div>
          <div className="col mt-4">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 justify-content-md-start my-4 mb-lg-3">
            <button
              id="liveToastBtn"
              onClick={loginClicked}
              className="btn main-color btn-outline-info btn-lg text-black"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-0 shadow-lg lost-image"></div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;

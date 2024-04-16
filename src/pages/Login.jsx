import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Login = () => {
  const navigate = useNavigate();
  const [isMentee, setIsMentee] = useState(true);
  const [initial, setInitial] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
    if (initial) setInitial(false);
    else {
      setFormData({
        email: "",
        password: "",
      });
    }
  }, [isMentee, initial]);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      try {
        const response = await axios.post(
          "/api/auth/login",
          {...formData, isMentee, isAdmin:false},{withCredentials:true}
        );
        console.log(response);
        if (isMentee) {
          navigate("/mentee/home");
        }
        else{
          navigate("/mentor/dashboard");
        }
      } catch (err) {
        console.log(err);
        //  set message we have to set setMessage as error
        setWarning("error")
        setMessage(err.response.data.message);
      }
    }
    else {
      setWarning("warning")
      setMessage("Please fill all the inputs")
    }
  };
  // function for alert from material ui
  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);

  return (
    <div className="w-full flex h-full">
      {message && (
        <Alert severity={warning} className="absolute top-7 right-2">
          <AlertTitle>{message}</AlertTitle>
        </Alert>
      )}
      {/* left */}
      <div className="w-1/3">
        <div className="bg-[#172e59] w-1/3 h-screen fixed flex items-center justify-center">
          <div className="w-max h-max p-2 bg-white rounded-full">
            <img src={logo} alt="" className="" />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex justify-center items-center w-2/3 my-12">
        <div className="flex flex-col gap-5 w-1/2">
          <div className="text-4xl font-bold">Log in</div>
          <div className="flex w-full">
            <div
              onClick={() => setIsMentee(true)}
              className={`py-2.5 cursor-pointer hover:text-black text-center w-1/2 ${!isMentee
                  ? "border-b text-gray-500"
                  : "border-b-2 border-[#118577] text-black"
                }`}
            >
              I'm a mentee
            </div>
            <div
              className={`w-1/2 text-center cursor-pointer hover:text-black py-2.5 ${isMentee
                  ? "border-b text-gray-500"
                  : "border-b-2 border-[#118577] text-black"
                } `}
              onClick={() => setIsMentee(false)}
            >
              I'm a mentor
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-gray-600 font-medium text-[15px]">
              Email or username
            </div>
            <input
              type="text"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              value={formData.email}
              className="border mt-0.5 border-gray-400 focus:border-2 focus:border-blue-500 px-2 rounded-md outline-none w-full py-1.5"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium text-[15px]"> Password</span>
              <div
                className="flex items-center justify-center justify-self-center text-[#118577] gap-1.5 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <VisibilityOffOutlinedIcon sx={{ width: "15px" }} />
                ) : (
                  <VisibilityOutlinedIcon sx={{ width: "15px" }} />
                )}
                <div>{!showPassword ? "Show" : "Hide"}</div>
              </div>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              value={formData.password}
              className="border mt-0.5 border-gray-400 focus:border-2 focus:border-blue-500 px-2 rounded-md outline-none w-full py-1.5"
            />
          </div>
          <button
            className="w-full cursor-pointer hover:bg-[#0f766a] bg-[#118577] text-center py-1.5 text-white rounded-md "
            onClick={onSubmit}
          >
            Log in
          </button>
          {isMentee && (
            <div className="flex flex-col w-full gap-5">
              <div className="flex gap-2 items-center">
                <div className="w-1/2 h-0 border"></div>
                <div>Or</div>
                <div className="w-1/2 h-0 border"></div>
              </div>
              <div className="flex items-center justify-center gap-2 w-full border border-gray-400 py-2 rounded-md">
                <img
                  src="https://img.icons8.com/fluency/22/google-logo.png"
                  alt=""
                />
                <div className="font-semibold cursor-pointer">
                  Log in with Google
                </div>

              </div>
            </div>
          )}
          <div className="underline text-[#118577] font-medium cursor-pointer">
            Forgot password?
          </div>
          <div>
            <div>Don't have an account?</div>
            <div>
              <span
                className="cursor-pointer underline text-[#118577] font-medium"
                onClick={() => navigate("/signup")}
              >
                Sign up as a mentee
              </span>{" "}
              or{" "}
              <span onClick={() => navigate('/mentor')} className="cursor-pointer underline text-[#118577] font-medium">
                apply to be a mentor
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

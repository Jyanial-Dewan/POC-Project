import logo from "../../public/Images/logo-2.png";
import languages from "../../public/Images/languages.svg";
import down from "../../public/Images/chevron-down.svg";
import { useGlobalContext } from "../Context/GlobalContext";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface formData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { setToken } = useGlobalContext();
  const [formData, setFormData] = useState<formData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const login = async () => {
    await axios
      .post(
        "/api/v2/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.access_token);
        setToken(res.data.access_token);
        Cookies.set("token", res.data.access_token, {
          expires: 7,
          secure: true,
        });
        localStorage.setItem("token", res.data.access_token);
        console.log(res);
        // console.log(res.data);
        if (res.status === 200) {
          navigate("/home");
        }
        setToken(res.data);
        localStorage.setItem("token", JSON.stringify(res.data));
      })
      .catch((error) => toast.error(error?.response?.data?.error));
  };

  return (
    <section className="flex justify-center items-center w-full h-[100vh]">
      <div className="bg-white flex flex-col w-[448px] px-[20px] ml-[45px] justify-center">
        <img src={logo} alt="Logo" className="w-[140px] h-[41px] mb-2" />
        <div>
          <h3 className="text-2xl font-semibold">
            Welcome to PROCG-POC Project
          </h3>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex flex-col gap-1">
            <label className="text-[#8d99ae]">Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-[#8d99ae] pl-4 w-full h-8 border-2 border-[#8d99ae] rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#8d99ae]">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-[#8d99ae] pl-4 w-full h-8 border-2 border-[#8d99ae] rounded-md outline-none"
            />
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <div className="flex gap-5">
            <input type="checkbox" />
            <p>Remeber Me</p>
          </div>
          <p className="text-blue-700">Forget Password?</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={login}
            className="h-8 w-full bg-[#D93636] rounded-md text-white hover:bg-[#D93636]/80"
          >
            Login
          </button>
          <div className="flex justify-between items-center">
            <div className="w-[183px] h-[1px] bg-[#8d99ae]"></div>
            <p>OR</p>
            <div className="w-[183px] h-[1px] bg-[#8d99ae]"></div>
          </div>
          <button className="h-8 w-full bg-[#590209] rounded-md text-white hover:bg-[#590209]/80">
            Continue with SSO
          </button>
        </div>
        <div className="bg-[#BFAE99]/10 p-2 mt-2 rounded-md">
          By clicking Continue, you agree to our Terms of Service and Privacy
          Policy.
        </div>
        <div className="flex gap-3 mt-1 w-full justify-center">
          <img src={languages} alt="language" />
          <p>English</p>
          <img src={down} alt="down" />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate()
  const submitHandeler =(e)=> {
    e.preventDefault()
    navigate("/admin")
  }

  return (
    <div className=" text-center w-full h-screen bg-yellow-400 py-5 flex items-center justify-center">
      <div className="flex items-center justify-center w-[400px] rounded-md shadow-md bg-white">
        <div className=" w-full p-5">
          <h2 className="text-[20px] font-semibold">Login</h2>
          <p className="text-base py-2">Login to your account to conntinue</p>
          <form action="" onSubmit={submitHandeler}>
            <div className="flex items-center justify-start flex-col w-full gap-3">
              <input type="email" placeholder="Email Address"  className="w-full border border-gray-500 py-2 px-2 rounded-md outline-none"/>
              <input type="password" placeholder="Password"  className="w-full border border-gray-500 py-2 px-2 rounded-md outline-none"/>
            </div> 
            <div className="flex items-center justify-end mt-1">
              <Link className=" text-blue-600 border-b border-blue-600" to={"/forgot-password"}>Forget Password</Link>
            </div>
            <div className="mt-3">
              <button className="w-full bg-yellow-400 py-2 text-white rounded-md font-semibold hover:bg-yellow-600 duration-300">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className=" text-center w-full h-screen bg-yellow-400 py-5 flex items-center justify-center">
    <div className="flex items-center justify-center w-[400px] rounded-md shadow-md bg-white">
      <div className=" w-full p-5">
        <h2 className="text-[20px] font-semibold">Forgot Password</h2>
        <p className="text-base py-2">Plase Enter your regester email to get reset password mail</p>
        <form action="">
          <div className="flex items-center justify-start flex-col w-full gap-3">
            <input type="email" placeholder="Email Address"  className="w-full border border-gray-500 py-2 px-2 rounded-md outline-none"/>
          </div> 
          <div className="mt-3">
            <button className="w-full bg-yellow-400 py-2 text-white rounded-md font-semibold hover:bg-yellow-600 duration-300">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword
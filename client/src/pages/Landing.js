import React from 'react';
import Navbar from '../hoc/navbar';
import Login from '../hoc/login';

export default function Landing(props) {
  return (
    <div className="w-full h-full">
      <Navbar/>
      <div className="bg-gradient-to-b from-blue-1000 to-black grid md:grid-cols-2 grid-cols-1">
        <div className="mt-24 md:mt-40 space-y-12 md:pb-40">
          <div className="mx-8">
            <p className="text-6xl font-medium text-white">WELCOME TO CODEGIT</p>
            <p className=" text-lg font-medium text-white py-5">Learn and grow with us by practicing coding problems and enhancing your skills.</p>
          </div>
          <div className="ml-8">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-4 rounded-md">SIGN UP AND CODE</button>
          </div>
        </div>
        <div className="flex flex-col items-center md:pt-32 pt-20 pb-40">
          <Login/>
        </div>
      </div>
    </div>
  );
}

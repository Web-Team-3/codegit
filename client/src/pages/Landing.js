import React from 'react';
import Navbar from '../hoc/navbar';

export default function Landing(props) {
    return (
        <div id="landing-container"  >
            <Navbar/>
        <div  >   
            
            
        <body  class="bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-blue-900" >
        
       <div class=" grid grid-cols-2">
       
       
       
       <div >
             
             <h1 class="text-6xl pl-10 pt-40 pb-20 mt-20 text-white">WELCOME TO CODEGIT</h1>
             <h2 class=" text-6l text-bold ml-10 text-white">Learn and grow with us by practicing coding problems and enhancing your skills.</h2>
             
             <div class="pt-20 pl-20 ml-40">
             <button   class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">SIGN UP AND CODE</button>
             </div>
             
      </div>
        
   
          
 <div class="w-full max-w-xs flex pt-100  pb-100 ml-40 mt-40 pr-50 ">
  <form class="bg-white shadow-md rounded px-8 pt-50 pb-50 mb-4 mt-20 ml-50">
  <svg class="w-20 h-20 ml-20 mr-30 pr-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
  <h2 class="pd-10 pl-16 text-3xl pt-5 font-bold" >LOGIN</h2>
    <div class="mb-4 pd-20 pt-10 ">
      <label class="block text-gray-700 text-sm font-bold mb-2 " placeholder="username" for="username">
        
      </label>
      <input class="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6 pd-20 pt-10">
      <label class="block text-gray-700 text-sm font-bold mb-2" placeholder="password" for="password">
        
      </label>
      <input class="shadow-md appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between pt-10 pb-10">
      <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  
</div>



</div>
        </body>
</div>



</div>
    );
}

//bg-gradient-to-r from-#366D93 via-#1D2D50 via-#133B5C to-#06151F



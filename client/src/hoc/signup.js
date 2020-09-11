import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Signup(props) {
    return (
      <div  className="w-72 h-80 bg-white rounded-lg invisible">
        <form className="flex flex-col items-center pt-10">
          <svg className="fill-current h-12 w-12"><title>Menu</title><FontAwesomeIcon icon={faUser}/></svg>
          <div className="pt-12">
            <input type="email" name="email" placeholder="Email" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <div className="py-8">
            <input type="text" name="username" placeholder="Username" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <div className="pb-8">
            <input type="password" name="password" placeholder="Password" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <div className="pb-12">
            <input type="password" name="confirm-password" placeholder="Confirm Password" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <input type="submit" value="Signup" className="w-20 h-10 bg-gray-200 rounded-md shadow-xl text-black hover:bg-black hover:text-white transition-colors duration-500 ease-out"></input>
        </form>
      </div>
    );
}
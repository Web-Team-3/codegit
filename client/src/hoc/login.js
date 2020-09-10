import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Login(props) {
    return (
      <div  className="w-72 h-72 bg-white rounded-lg">
        <form className="flex flex-col items-center pt-10">
          <svg className="fill-current h-12 w-12"><title>Menu</title><FontAwesomeIcon icon={faUser}/></svg>
          <div className="pt-12">
            <input type="text" name="username" placeholder="Username" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <div className="pt-8 pb-10">
            <input type="password" name="password" placeholder="Password" className="w-64 h-10 p-5 bg-gray-200 rounded shadow-xl"></input>
          </div>
          <input type="submit" value="Login" className="w-20 h-10 bg-gray-200 rounded-md shadow-xl text-black hover:bg-black hover:text-white"></input>
        </form>
      </div>
    );
}
import React from 'react';

import questions from "./question";

export default function Qcard(props) {
    return (

        <div className="pd-10">
       


       <div className="max-w-6xl  flex  overflow-hidden   bg-gray-200 rounded shadow-xl   mt-20 pd-10 pt-10 pr-10 pl-10 ml-32  boxShadow-xl   ">
       
       <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">{props.qName}</div>
         <p className="text-gray-700 text-l">
        {props.qDetails}
         </p>

         <input type="submit"  className="w-20 h-10 bg-gray-200 rounded-md shadow-xl text-black hover:bg-black hover:text-white "></input>
       </div>
       
     </div>
  

    </div>
       





    );
}
import React from 'react';
import Navbar from '../hoc/navbar';

//import Qcard from '../hoc/qCard';
import Card from '../hoc/createQuestion';
import questions from '../hoc/question';
//css
//import "../css/problems.css";

export default function Problems(props) {
    return (
        <div id="problems-container"  className="bg-gradient-to-b from-blue-1000 to-black ">
        
        <Navbar />
        
        <h1 className="text-6xl font-medium text-white  text-left sm:text-center md:text-right lg:text-justify xl:text-center">QUESTIONS</h1>


        <div className="bg-gradient-to-b from-blue-1000 to-black ">

        <div>
            
        {questions.map(Card)}

        </div>
        





     
       
     



        </div>




        </div>
    );
}
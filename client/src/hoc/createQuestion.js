import React from 'react';
import Qcard from './qCard';
import questions from './question';

export default function Card(question) {
  return (
   <Qcard
      qName={question.qName}
      qDetails={question.qDetails}
      
    />
  );



 
}
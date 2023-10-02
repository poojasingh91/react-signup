import logo from './logo.svg';
import React, {useState} from 'react';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react'
import './App.css';
import Card from './Card';
import SignUpPage from './SignUpPage';

function App() {
  const[selectedWebsite, setSelectedWebsite]=useState(null);
  const handleButtonClick=(websiteName)=>{
    console.log(websiteName);
    setSelectedWebsite(websiteName);
  }
  console.log(selectedWebsite);

  return (
    <>
      <div className='main-block'>
        <div className='block-item-left'>
          <h1>Sign up with: {selectedWebsite}</h1>
          <p><small>We are learning programming languages like HTML, CSS, Java Script, React, Ruby, etc.</small></p>
        </div>
        <hr></hr>
        <hr></hr>
        <div className='block-item-right'>
        {!selectedWebsite ? (<Card onButtonClick={handleButtonClick}/>) : (<SignUpPage selectedWebsite={selectedWebsite}/>)}
        </div>
      </div>
      
    </>
  );
}

export default App;

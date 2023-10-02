import React from 'react'

export default function SignUpPage({selectedWebsite}){
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Sign up for ${selectedWebsite}`);


  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label for="fullname">Full name:</label>
        <input type="text" id="fullname" name="fullname"></input>
        <br></br>
        <label for="password">Password:</label>
        <input type="password" id="pwd" name="pwd"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
    </form>
      
    </>
  );
}

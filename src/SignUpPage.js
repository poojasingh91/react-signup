import React from 'react'

export default function SignUpPage(){
  return (
    <>
    <form action="/action_page.php">
        <label for="fullname">Full name:</label>
        <input type="text" id="fullname" name="fullname"></input>
        <label for="password">Password:</label>
        <input type="password" id="pwd" name="pwd"></input>
        <input type="submit" value="Submit"></input>
    </form>
      
    </>
  );
}

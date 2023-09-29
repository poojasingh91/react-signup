import logo from './logo.svg';
import './App.css';
import Card from './Card';
import SignUpPage from './SignUpPage';

function App() {
  return (
    <div >
      <body className='main-block'>
        <div className='block-item-left'>
          <h1>Sign up with: </h1>
          <p><small>We are learning programming languages like HTML, CSS, Java Script, React, Ruby, etc.</small></p>
        </div>
        <div className='block-item-right'>
          <Card/>
        </div>
      </body>
      <br></br>
      <br></br>
      <br></br>
      <SignUpPage/>
    </div>
  );
}

export default App;

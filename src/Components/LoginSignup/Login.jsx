import React ,{useState} from 'react';
import './Login.css';

const Login = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className='Login-pop-up'>
      <form className='container' action="">
        <div className="title">
            <h2>{currentState}</h2>
            <button onClick={()=>setShowLogin(false)}>#</button>
        </div>
        <div className="inputs">
            {currentState==="Login"?<></>:<input type="text" placeholder='Enter Name' required/>}
            <input type="email" placeholder='Enter Email' required/>
            <input type="password" placeholder='Enter Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create account":"Login"}</button>
        <div className='condition'>
            <input type="checkbox" />
            <p>By continuing,i agree to thr terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"?
        <p>Create a new account?<span onClick={()=>setCurrentState("Sign Up")}>Click here.</span></p>:
        <p>Already have an account?<span onClick={()=>setCurrentState("Login")}>Login here.</span></p>}
      </form>
    </div>
  )
}

export default Login

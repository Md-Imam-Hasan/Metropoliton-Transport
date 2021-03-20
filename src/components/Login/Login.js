import React, { useContext, useState } from 'react';
import './Login.css';
import GoogleIcon from '../../images/Group 573.png'
import { handleGoogleSignIn, initializeFirebase } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

initializeFirebase();

const Login = () => {
  const [newUser, setNewUser] = useState(true)
  const [user, setUser] = useState({
    signIn: false,
    name: '',
    email: '',
    password: '',
    password1:''
  });

  const [userName, setUserName] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, isRedirect) => {
    setUser(res);
    setUserName(res.name);
    // setLoggedInUser(res);
    isRedirect && history.replace(from);
  }
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }
  const handleSubmit = () => {

  }
  return (
    <div className='login d-flex flex-column justify-content-center align-items-center'>
      <div className="card mt-4">
        {newUser ? <h1 className='m-3'>Create an account</h1> : <h1 className='m-3'>Login</h1>}

        <div className='container login-form'>
          <form onSubmit={handleSubmit}>
            {newUser && <input type="text" name='name' placeholder='Name' required />}
            <input type="email" name="email"  placeholder='Email' required />
            <input type="password" name="password1"  placeholder='Password' required />
            {newUser && <input type="password" name="password2"  placeholder='Confirm Password' required />}
            {!newUser && <div className='px-4 d-flex justify-content-between'>
              <div>
                <input className='mr-1' type="checkbox" name="remember"  />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <div>
                <span>Forget Password</span>
              </div>
            </div>}
            <input className='mt-1 btn btn-lg btn-danger' type="submit" value={newUser ? 'Create an account' : 'Login'} />
          </form>
          <div className='text-center'>
            {newUser ? <p>Already have an account? <span onClick={() => setNewUser(!newUser)}>Login</span></p> : <p>Don't have an account? <span onClick={() => setNewUser(!newUser)}>Create an account</span></p>}
          </div>
        </div>
      </div>
      <div className='text-center'>
        <big className='p-3 bg-white d-inline-block'>Or</big>
        <button className='btn btn-block btn-customise d-flex justify-content-center align-items-center' onClick={googleSignIn}> <img src={GoogleIcon} alt="" /> Continue with Google </button>
      </div>
    </div>
  );
};

export default Login;
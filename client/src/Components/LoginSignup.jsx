import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';


const LoginSignup = ({isLogin,setIsLogin}) => {
    const [log,setlog] = useState(false) ; 
    return (
      <div className='flex justify-center items-center w-[100vw] h-[100vh]'>
        <div className=" border-4 p-4 w-[400px] h-[400px] flex flex-col justify-center items-center gap-4">
        <h1>{log ? 'Login' : 'Signup'}</h1>
        {log ? <Login isLogin={isLogin} setIsLogin={setIsLogin}/> : <Signup isLogin={isLogin} setIsLogin={setIsLogin} />}
          <button onClick={() => setlog(!log)}>
            {log ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </div>
    );
}

export default LoginSignup

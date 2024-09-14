import './App.css'
import LoginSignup from './Components/LoginSignup'
import Landing from './Pages/landing';
import { useState } from 'react';
function App() {

  const [islogin,setIsLogin] = useState(false) ;

  return (
    <div>
      { 
        !islogin && 
          <div>
            <LoginSignup islogin={islogin} setIsLogin={setIsLogin} />
          </div>
      }
      {
        islogin && 
        <div>
          <Landing islogin={islogin} setIsLogin={setIsLogin}/>
        </div>
      }
    </div>
  )

}

export default App

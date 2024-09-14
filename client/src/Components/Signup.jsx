import React, { useState } from 'react';


const Signup = ({isLogin,setIsLogin}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Name,setName] = useState('') ; 
  const [phone ,setphone] = useState('') ; 
  const [bio,setbio] = useState('') ; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: Name,
      email: email,
      password: password,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
      if(data.success){
          setIsLogin(!isLogin) ;
      }
    } catch (err) {
      console.error('Error occurred during signup', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input
                type="name"
                value={Name}
                className='border-4'
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Email:</label>
            <input
                type="email"
                value={email} 
                className='border-4'
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                value={password}
                className='border-4'
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <div>
            <label>Phone:</label>
            <input
                type="Phone"
                value={phone}
                className='border-4'
                onChange={(e) => setphone(e.target.value)}
                
            />
        </div>
        <div>
            <label>Bio:</label>
            <input
                type="text"
                value={bio}
                className='border-4'
                onChange={(e) => setbio(e.target.value)}
            />
        </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

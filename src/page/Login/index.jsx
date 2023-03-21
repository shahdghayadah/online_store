import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContex";
import './login.css'
const LoginPage = ()=>{
  const {login}= useContext(AuthContext);
  const navigate = useNavigate();
    const [userName,setUserName] = useState('johnd');
    const [password,setPassword] = useState('m38rmF$');

    const loginFormHandler = (e) => {
        e.preventDefault();
        const data = {
          username: userName,
          password: password,
        };
    
        fetch('https://fakestoreapi.com/auth/login', {
          method: 'Post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log('data login', data));


          const user = {
            name :userName,
            token : data.token,

          }
          login(user)
          navigate('/profile')
      };
    

      
    const UserNameHandler = (e)=>{
    setUserName(e.target.value);
    }
    const passworedHandler = (e)=>{
        setPassword(e.target.value);
        }
 return(
<div className="login-div">
    <form className="login-form" onSubmit={loginFormHandler}>
        <label>User Name</label>
        <input id = "name" name ="name" type="text" value={userName} placeholder="Enter your name " onChange={UserNameHandler}/>
        <label>Password</label>
        <input id = "Password" name ="Password" type="Password" value={password} placeholder =" Enter your Password " onChange={passworedHandler}/>
        <button type="submit">Login</button>
    </form>
</div>

 );
};
export default LoginPage;
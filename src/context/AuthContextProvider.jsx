import React, { useState } from "react";
import AuthContext from "./AuthContex";

 const AuthContextProvider =(props)=>{
  const {children} = props;
  const [user,SetUser] = useState(null);
  const isLoging = user ? true :false;
  const login = (user)=>{
    SetUser(user);
    ///to convert jason to string
    localStorage.setItem ('user',JSON.stringify(user));
  }

  const logOut =()=>{
    SetUser(null);
    localStorage.removeItem('user');
  }
const values = {user, isLoging, login, logOut};
return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
 }
  export default AuthContextProvider
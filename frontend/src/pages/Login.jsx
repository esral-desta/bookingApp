import React from "react";
import { useState } from "react";
import { json, Link, Navigate } from "react-router-dom";
import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Login() {
  const [email,setEmail] =  useState("")
  const [password,setPassword] =  useState("")
  const [redirect,setRedirect] = useState(false)
  
  const {user,setUser} = useContext(UserContext);

  async function handleSubmit(e){
    e.preventDefault()
    try{
      const userDoc = await axios.post("/login",{email,password})
      console.log(userDoc.data);
      setUser(userDoc.data);
      setRedirect(true)
      console.log("set redirect to true");
    }
    catch(e){
      console.log(e);
      console.log("login failed");
    }
  }

  if(redirect){
    return(
      <Navigate to="/"/>
    )
  }


return (
<div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={e=>{handleSubmit(e)}}>
          <input type="email"
                 placeholder="your@email.com" 
                 value={email}
                 onChange= {(e)=>{
                  setEmail(e.target.value)
                 }}
                 />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange= {(e)=>{
                  setPassword(e.target.value)
                 }}
                 />

          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
import React from "react";
import "./style/registration.css"

const login = () => {

  let email = false;
  var emailValue = "";

  let password = false;
  var passwordValue = "";


  let handleChangeEmail = event => {

    emailValue = event.currentTarget.value
    let protoEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (protoEmail.test(emailValue)) {
      email=true;
      event.currentTarget.style.backgroundColor = '#4CAF50';
    } else {
      email=false;
      event.currentTarget.style.backgroundColor = 'red';
    }
}

  const handleChangePassword = event => {

    passwordValue = event.currentTarget.value

    if (passwordValue.length > 8 && passwordValue.length < 26) { 
      password=true;
      event.currentTarget.style.backgroundColor = '#4CAF50';
    } else {
      password=false;
      event.currentTarget.style.backgroundColor = 'red';
    }
  }

  const handleSubmit = () => {
    if (email && password)
      console.log("ok")
      else {
        console.log("false")
      }
  }

  const title = "Login to access thousands of jobs";
  return (
    <div className="container">
      <h1 className="callToAction">{title}</h1>
      <div className="container">
        <input type="email" onChange={handleChangeEmail} placeholder="Email" required/>
        <input type="password" onChange={handleChangePassword} placeholder="Password" required/>
        <button type="submit" onClick={handleSubmit} >Login</button>
      </div>
      <div className="callToAction"> No account yet ? <a href="./register">Register</a>. </div>
  </div>
  );
};

export default login;

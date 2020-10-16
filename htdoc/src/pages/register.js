import React from "react";
import "./style/registration.css"

const register = () => {

  let email = false;
  var emailValue = "";

  let password = false;
  var passwordValue = "";

  let confirmPassword = false;
  var confirmPasswordValue = "";

  let firstName = false;
  var firstNameValue = ""

  let lastName = false
  var lastNameValue = ""

  const handleChangeFirstName = event => {
    firstNameValue = event.currentTarget.value

    if (firstNameValue.length > 3) {
      firstName = true;
      event.currentTarget.style.backgroundColor = '#4CAF50';
    } else {
      firstName = false;
      event.currentTarget.style.backgroundColor = 'red';
    }
  }
  const handleChangeLastName = event => {
    lastNameValue = event.currentTarget.value

    if (lastNameValue.length > 3) {
      lastName = true;
      event.currentTarget.style.backgroundColor = '#4CAF50';
    } else {
      lastName = false;
      event.currentTarget.style.backgroundColor = 'red';
    }
  }
  
    const handleChangeEmail = event => {

    emailValue = event.currentTarget.value
    let protoEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (protoEmail.test(emailValue)) {
      email=true;
      event.currentTarget.style.backgroundColor = '#4CAF50';
    }
    else {
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

  if (confirmPasswordValue === passwordValue) {
    confirmPassword = true
  } else {
    confirmPassword = false
  }
}

  const handleChangeConfirmPassword = event => {

    confirmPasswordValue = event.currentTarget.value

  if (passwordValue === confirmPasswordValue) {
    confirmPassword=true;
    event.currentTarget.style.backgroundColor = '#4CAF50';
  } else {
    confirmPassword=false;
    event.currentTarget.style.backgroundColor = 'red';
  }
}

  const handleSubmit = () => {
    if (email && password && confirmPassword && lastName && firstName)
      console.log("ok")
      else {
        console.log("false")
      }
  }


  const title = "Register to access thousands of jobs";
  return (
    <div className="container">
      <h1 className="callToAction" >{title}</h1>
      <div className="container">
        <input type="text" onChange={handleChangeFirstName} placeholder="First name" required/>
        <input type="text" onChange={handleChangeLastName} placeholder="Last name" required/>
        <input type="email" onChange={handleChangeEmail} placeholder="Email" required/>
        <input type="password" onChange={handleChangePassword} placeholder="Password" required/>
        <input type="password" onChange={handleChangeConfirmPassword} placeholder="Confirm Password" required/>
        <button type="submit" onClick={handleSubmit} >Create Account</button>
      </div>
    <div className="callToAction"> Already have an account ? <a href="./login">Log in</a>. </div>
  </div>
  );
};

export default register;
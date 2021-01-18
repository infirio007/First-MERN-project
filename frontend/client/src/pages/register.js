import React from "react";
import './index.css';

const Register = () => {
    return(
        <>
    <div className="center-div">
      <form className="form" action="http://localhost:9000/register" method="post">
        <h1 className="heading-form">REGISTER</h1>
        <input required className="feild-form" type="email" name="email" placeholder="Email" />
        <input required className="feild-form" type="password" name="password" placeholder="Password" />
        <button className="submit" type="submit" id="regis">Register Now</button>
        <a href="http://localhost:3000/sign-in" className="account">ALL READY HAVE AN ACCOUNT</a>
      </form>
    </div>
  </>
    )
}

export default Register;
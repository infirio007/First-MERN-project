import React, {useState, useEffect} from 'react';
import './index.css';

function SignIn(){
  var [data, sdata] = useState({
    email: "",
    password: ""
  })

  var [d, set] = useState()
  useEffect(() => console.log(d))
  const inputEvent = (e) => {
    var val = e.target.value;
    var name = e.target.name;

    sdata((preval) => {
      return{
      ...preval,
      [name]: val
    }
    })
  }

  const submit = () => {
    set(data);
  }

  return (
  <>
    <div className="center-div">
      <form className="form" action="http://localhost:9000/sign-in" method="post">
        <h1 className="heading-form">SIGN IN</h1>
        <input required className="feild-form" type="email" name="email" placeholder="Email" onChange={inputEvent}/>
        <input required className="feild-form" type="password" name="password" placeholder="Password" onChange={inputEvent}/>
        <button className="submit" type="submit" onSubmit={submit}>Submit</button>
        <a href="http://localhost:3000/register" className="account">CREATE AN ACCOUNT</a>
      </form>
    </div>
  </>
  )
}

export default SignIn;
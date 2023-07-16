import React from 'react'
// import boi from "../imag/image.png";
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
const Login = () => {
    const [err, setErr] = useState(false);
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch (err) { 
            setErr(true);
        }

    };
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <img src="/favicon.ico" alt="" />
        <div >
            <div className="logo">
                <h2>WebChat</h2> 
            </div>
            <div className="title"><h3>Login</h3>
            </div>

        </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            {err && <span>Something went wrong</span>}
            </form>
            <p>don't have an account?<Link to="/register">Register</Link></p>
        </div>
    </div>
  )
}

export default Login

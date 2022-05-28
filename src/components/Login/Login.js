import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
  
    const [signInWithEmailAndPassword, user] =
      useSignInWithEmailAndPassword(auth);
  
    const handleLogin = (event) => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      signInWithEmailAndPassword(email, password);
    };
  
    if (user) {
      navigate("/");
    }

    const registerPage = () => {
    navigate("/register");
    };

    return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 border shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-600">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                ref={emailRef}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <input className="btn bg-cyan-400 w-full border-0 mt-5 max-w-xs" value="Login" type="submit" />
            <p>
            Don't have an account? -
            <Link
              to="/register"
              className="text-blue-400 font-bold m-1"
              onClick={registerPage}
            >
              Create
            </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Login;
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../Token/useToken';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser);

    if (token) {
       navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div>
        <div className="flex h-screen justify-center items-center">
          <div className="card w-96 bg-base-100 border shadow-lg">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold text-gray-600">Create Account</h2>
            <form onSubmit={handleRegister}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
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
              <input className="btn bg-cyan-400 w-full border-0 mt-5 max-w-xs" value="Create" type="submit" />
            </form>
            <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Google Account
          </button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Register;
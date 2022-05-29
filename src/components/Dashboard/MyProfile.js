import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            <p class="text-lg">your email: {user.email}</p>
            <div className="flex h-screen justify-center items-center">
        <div className="card w-96 bg-base-100 border shadow-lg">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-700">Tell us About Yourself</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Education</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Location</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
              </label>
            </div>
            <input className="btn bg-cyan-400 w-full border-0 mt-5 max-w-xs" value="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyProfile;
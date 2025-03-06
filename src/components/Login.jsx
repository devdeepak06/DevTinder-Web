import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
import { useDispatch } from "react-redux";
import { addUser } from "../utils/useSlice";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("deepak.kumar@google.com");
  const [password, setPassword] = useState("Deepak@123");

  const handleLogIn = async () => {
   try {
     const result = await axios.post(`${apiUrl}/api/auth/login`, {
       email, password
     }, { withCredentials: true });
     console.log(result);
   } catch (error) {
     console.error(error)
    
   }
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID:</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </label>
            <div className="card-actions justify-center">
              <button onClick={handleLogIn} className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">Login</button>
              <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-md">
                <a href="/signup">
                  Signup
                </a>
              </button>
            </div>
          </div>

          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
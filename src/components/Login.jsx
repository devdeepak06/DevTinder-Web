import { useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

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
    <>
      <div className="flex justify-center items-center py-40">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title flex justify-center">Login</h2>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="text" placeholder="********" className="input input-bordered w-full max-w-xs"
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
        </div>
      </div>
    </>
  )
}

export default Login;
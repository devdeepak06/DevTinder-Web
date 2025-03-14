<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
=======
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
import { removeUser } from "../utils/userSlice";

>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  console.log(user)
  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current">
              <path
                d="M9.96 2.28c1.39 2.7 2.13 5.07 1.81 7.61-.35 2.71-2.34 4.8-2.35 4.8-.04.04-.06.1-.06.17 0 .09.07.17.16.17.02 0 .03 0 .05-.01 1.9-.45 3.14-1.83 3.85-3.05.8-1.37 1.09-2.61 1.26-3.6a10.8 10.8 0 0 0 .13-2.25c1.13 1.1 1.96 2.45 2.46 3.91.64 1.86.8 4.13-.12 6.27-1.06 2.44-3.42 4.12-6.05 4.2-2.02.07-3.67-.66-4.83-1.88a6.5 6.5 0 0 1-1.7-5.99c.55-2.68 3.15-5.5 5.39-10.15Z"
                fill="rgb(227, 69, 20)"
              />
            </svg>DevTinder</Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div className="form-control">Welcome, {user.firstName}</div>
            <div className="dropdown dropdown-end mx-5 flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="user photo" src={user.photoUrl} />
                </div>
=======

  const handleLogout = async () => {
    try {
      await axios.post(apiUrl + "/auth/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      if (window.location.pathname !== "/login") {
        return navigate("/login");
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          👩‍💻 DevTinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <div className="form-control">Welcome, {user.firstName}</div>
          <div className="dropdown dropdown-end mx-5 flex">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="user photo" src={user.photoUrl} />
>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <Link to={"/logout"}>Logout</Link></li>
              </ul>
            </div>
<<<<<<< HEAD
          </div>
        )}
      </div>
    </>
  )
}

=======
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow top-10"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>

              <li>
                <Link to="/requests">Requests</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
export default NavBar;
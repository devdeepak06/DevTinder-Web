import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
<<<<<<< HEAD
import Footer from './Footer';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/useSlice";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
=======
import Footer from "./Footer";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(apiUrl + "/profile/view", {
<<<<<<< HEAD
        withCredentials: true
      });
      dispatch(addUser(res.data))
=======
        withCredentials: true,
      });
      dispatch(addUser(res.data));
>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
<<<<<<< HEAD
      console.error(err)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
=======
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
>>>>>>> 1ece36bbc5d842c4677162238d89c34cf5725c33

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;
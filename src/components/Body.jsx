import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from './Footer';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/useSlice";
import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const res = await axios.get(apiUrl + "/profile/view", {
        withCredentials: true
      });
      dispatch(addUser(res.data))
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.error(err)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Body;
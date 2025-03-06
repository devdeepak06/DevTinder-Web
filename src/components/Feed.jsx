import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect } from "react";
import UserCard from "./UserCard"
const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const getFeed = async () => {
    if (feedData) return;
    try {
      const res = await axios.get(`${apiUrl}/user/feed`, {
        withCredentials: true
      })
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    getFeed();
  }, [])
  if (!feedData) return;
  if (feedData.length <= 0) return <h1 className="flex justify-center my-10">No new users founds!</h1>;
  return (
    feedData && (
      <>
        <div className="flex justify-center items-center my-10">
          <UserCard user={feedData[0]} />
        </div>
      </>
    )
  )
}

export default Feed;
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect } from "react";
import UserCard from "./UserCard";
const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const currentUser = useSelector((store) => store.user);
 
  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = async () => {
    if (feedData?.length > 0) return;
    try {
      const res = await axios.get(`${apiUrl}/user/feed`, {
        withCredentials: true,
      });
      console.log(res?.data?.data);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error(err);
    }
  };
  const filteredFeedData = Array.isArray(feedData) ? currentUser ? feedData.filter((user) => user.firstName !== currentUser.firstName) : feedData : [];
  if (!filteredFeedData || filteredFeedData.length <= 0) {
    return <h1 className="flex justify-center my-10">No new users found!</h1>;
  }

  return (
    <div className="flex justify-center items-center my-10 sm:flex-col lg:flex-row gap-5">
      {filteredFeedData.map((user, index) => (
          <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Feed;
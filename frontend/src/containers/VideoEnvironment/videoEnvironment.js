import React, { useState, useEffect, useSelector } from "react";
import ConcertVideoList from "./ConcertVideoList/ConcertVideoList";
import axios from "axios";
import ConcertVideo from "./ConcertVideo/ConcertVideo";

// import UserCard from '../../components/UserCard';
// import { useDispatch, useSelector } from 'react-redux';
// import UpdateProfile from '../register/UpdateProfile';

import "./videoEnvironment.scss";

const VideoEnvironment = () => {
  //   const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  //   return (
  //       <div className="profile-container">
  //           <div className="user-inner">
  //               <UserCard user={user} />
  //           </div>
  //           <div className="profile-inner">
  //               <UpdateProfile current={user} />

  //           </div>
  // // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
  // // return (
  // //     <div className="profile-container">
  // //         <UserCard user={user} />
  // //         <UpdateProfile current={user} />
  // //     </div>
  // // );

  const [concerts, setConcerts] = useState([]);

  // const FEATURED_API =
  //   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  // const fetchConcerts = async (API) => {
  //   const { data } = await axios.get(API);
  //   console.log(data.results);
  //   setConcerts(data.results);
  //   console.log(concerts);
  // };
  const getData = async () => {
    // const { data } = await axios.get("/api/artists");
    // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
    const url = '/api/concerts?emailaddress=par@gmail.com'
    const { data } = await axios.get(url);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, [])

  // useEffect(() => {
  //   fetchConcerts(FEATURED_API);
  // }, []);

  return (
    <div className="container">
      <h2 className="text-center mt-5 text-uppercase">Concerts Lists</h2>
      <div className="row">
        <div className="col-8">
          <ConcertVideo />
        </div>
        <div className="col-4">
          <ConcertVideoList />
        </div>
      </div>
    </div>
  );
};

export default VideoEnvironment;

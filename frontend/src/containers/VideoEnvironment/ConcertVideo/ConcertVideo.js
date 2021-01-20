import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConcertVideo = () => {
  const [concertDetails, setConcertDetails] = useState();
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "04c35731a5ee918f014970082a0088b1"; //temporary
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="embed-responsive embed-responsive-16by9">
      {/* <iframe className="embed-responsive-item" src="https://www.youtube.com/watch?v=t_mA7DwKKYA&ab_channel=AbelRoland" allowfullscreen></iframe> */}
      {/* <video id="video-preview" controls loop>
        <source src="http://localhost:3007/3bb2107c-e32d-4d80-9370-be98a82abffd" type="video/mp4" />
      </video> */}
      {/* <video id="video-preview" controls loop>
        <source src="https://www.youtube.com/watch?v=t_mA7DwKKYA&ab_channel=AbelRoland" type="video/mp4" />
      </video> */}
      <iframe title="youtube" width="420" height="315"
        src="https://www.youtube.com/embed/t_mA7DwKKYA">
      </iframe>
    </div>
  )
};

export default ConcertVideo;

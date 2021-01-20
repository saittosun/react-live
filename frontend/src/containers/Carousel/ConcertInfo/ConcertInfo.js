import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import "./ConcertInfo.scss";

const FEATURED_API = "/api/instruments";

const ConcertInfo = () => {
  const location = useLocation();
  console.log(location);
  const [concertDetails, setConcertDetails] = useState();
  const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "04c35731a5ee918f014970082a0088b1"; //temporary
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setConcertDetails(res?.data))
      .catch()
      .finally();
  }, [id]);

  // fetch("/api/instruments", {
  //   method: "GET",
  //   headers: {
  //     "Content-type": "application/json;charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.text())
  //   .then((result) => {
  //     console.log("Success:", result);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // // console.log(concerts);
  // useEffect(() => {
  //   ConcertInfo(FEATURED_API);
  // }, []);
  return (
    <div className="row">
      <div className="col-md-9 offset-md-3">
        <div className="card border-dark mb-3">
          <div className="card-header">Text about the concerts/links</div>
          <div className="card-body">
            <h5 className="card-title">{concertDetails?.original_title}</h5>
            <img
              alt="concert img"
              src={baseImageUrl + concertDetails?.poster_path}
              width="670"
              height="350"
            />
            <p className="card-text">{concertDetails?.overview}</p>
          </div>
        </div>
        <div className="card border-dark mb-3">
          <div className="card-header">Info about the concert</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card border-dark mb-3">
          <div className="card-header">Book this concert</div>
          <div className="card-body">
            <h5 className="card-title">Light card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary float-right">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertInfo;

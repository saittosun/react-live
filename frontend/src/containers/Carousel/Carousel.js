import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import Item from "./Item/Item";

import "./Carousel.scss";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 3 },
];

// fetch('/api/artists', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//         "Content-type": "application/json;charset=UTF-8"
//     }
// })
//     .then((response) => response.text())
//     .then((result) => {
//         console.log('Success:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

const BootstrapCarousel = () => {
  const [concerts, setConcerts] = useState([]);

  // const FEATURED_API = "/api/instruments";
  const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

  const fetchConcerts = async (API) => {
    const { data } = await axios.get(API);
    console.log(data.results);
    setConcerts(data.results);
    console.log(concerts);
  };

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
  console.log(concerts);
  useEffect(() => {
    fetchConcerts(FEATURED_API);
  }, []);

  // [{"InstrumentName":"accordion"}]
  return (
    <div className="upcoming">
      <h1 className="d-flex justify-content-center">Upcoming Concerts</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          {concerts.map((concert) => (
            <Item key={concert.id} {...concert} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BootstrapCarousel;

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const ConcertVideoList = ({ title, vote_average, poster_path, overview, id }) => {
//  const history = useHistory();
//  return (
//   <a
//    onClick={() => history.push(`/profile`)}
//    className="list-group-item text-decoration-none"
//   >
//    <p>{poster_path ? IMG_API + poster_path : "movie"}</p>
//   </a>
//  );
// };

const ConcertVideoList = () => {
    const [concerts, setConcerts] = useState([]);
    const getData = async () => {
        // const { data } = await axios.get("/api/artists");
        // const user = useSelector(state => state?.users?.items[state.users.items.length - 1]);
        const url = 'https://aplaudoapi.azurewebsites.net/api/concerts?emailaddress=par@gmail.com'
        const { data } = await axios.get(url);
        console.log(data);
        setConcerts(data);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="list-group">
            {concerts.map((concert) => (
                <a href="#" className="list-group-item list-group-item-action">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{concert.About}</h5>
                        <small>{concert.ConcerId} days ago</small>
                    </div>
                    <p className="mb-1">{concert.Style}</p>
                    <small>{concert.EmailAddress}</small>
                </a>
            ))}
        </div>
    )
}

export default ConcertVideoList;

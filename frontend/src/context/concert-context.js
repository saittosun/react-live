import React from "react";

const concertContext = React.createContext({
 firstname: 'sait',
 lastname: 'tosun',
 info: 'about',
 link: 'https://source.unsplash.com/featured?technology',
 book: () => {}
});

export default concertContext;
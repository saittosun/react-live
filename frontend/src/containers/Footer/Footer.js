import React from "react";

const Footer = () => {
 const date = new Date().getFullYear();
 return (
  <footer className="bg-dark">
   <div className="container-fluid">
     <div className="row">
       <div className="col text-center text-light border-top pt-3">
         <p> &copy; {date} Aplaudo.com All rights reserved </p>
       </div>
     </div>
   </div>
 </footer>
 )
}

export default Footer;
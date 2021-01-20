import React from 'react';
import Search from '../../components/Search';

import './About.scss';

const About = () => {
 return (
  <div className='container'>
   <div className="row jumbotron">
    <div className="col-6">
      
       <h1 className="display-4 text-center">About</h1>
       <p className="lead">
         A accusamus veniam repellat consequatur sit optio veritatis laborum numquam. Maxime recusandae est non quaerat amet facere, in obcaecati aliquam distinctio alias? Sit aut cumque doloremque dolor totam recusandae ratione. 
       </p>
       <button className="btn btn-started custom-btn mr-5" href="#" role="button">
        GET STARTED
       </button>
       <button className="btn btn-learn custom-btn" href="#" role="button">
        LEARN MORE
       </button>
      
    </div>
    <div className="col-6 mt-3">
      <h5 className="mb-5 text-center font-weight-light">Search for concerts</h5>
      <Search />
    </div>
   </div>
  </div>
 )
}

export default About;
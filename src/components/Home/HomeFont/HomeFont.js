import React from 'react';
import boy from '../../../images/deleveri-boy.jpg'

const HomeFont = () => {

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-5 mt-5 pt-5">
               <h1 className="title-size mt-5 pt-4">We Provide Delivery <br/>Within 30 Min</h1>
               <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua adminim veniam quis nostrud exercitation</p>
               <input className="input-search mt-4" placeholder="Enter ZIP Code"  />
            </div>
            <div className="col-md-7 mt-5 mb-5 pt-5">
               <img className="img-fluid mt-5 ms-5" src={boy} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default HomeFont;
import React from 'react';
import google from '../../../images/google.png'
import Apple from '../../../images/download.png'
import iphone from '../../../images/iphone.png'
const DeliciousFood = () => {
   return (
      <section className="container mt-5 pt-5 pb-5">
         <div className="row mt-5 pt-5">
            <div className="col-md-6">
               <img className="img-fluid-size" src={iphone} alt=""/>
            </div>
            <div className="col-md-6 mt-5 pt-5">
               <h1>Make The Delicious Food and <br/> Order Our App</h1>
               <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
               <div className="mt-4">
                  <h4><button className="button-number-size me-3">01</button> Follow Delivery Status</h4>
                  <h4><button className="button-number-size me-3 mt-2">02</button> Order From Any Location</h4>
                  <h4><button className="button-number-size me-3 mt-2">03</button> Get Important Notices</h4>
               </div>
               <div className="d-flex mt-4 pt-3">
                  <img className="img-fluid-css" src={Apple} alt=""/>
                  <img className="img-fluid-css ms-4" src={google} alt=""/>
               </div>
            </div>
         </div>
      </section>
   );
};

export default DeliciousFood;
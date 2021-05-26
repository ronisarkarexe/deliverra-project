import React from 'react';
import meet from '../../../images/mee.png'
const HomeOrder = () => {
   return (
      <div className="container mt-5 pt-5">
         <div className="row">
            <div className="col-md-6 mt-5 pt-5">
               <h1 className="mt-5">Sit at Home We Will Take <br/> Care Your Order</h1>
               <p className="text-secondary mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
               <button className="button-size mt-3">Order Now</button>
            </div>
            <div className="col-md-6 mt-5">
               <img className="img-fluid-size ms-5" src={meet} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default HomeOrder;
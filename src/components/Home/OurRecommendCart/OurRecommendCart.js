import React from 'react';
import { Image } from 'react-bootstrap';

const OurRecommendCart = (props) => {
   const {picture, title, name} = props.recommendation;
   return (
      <div className="col-md-4 mt-5 mb-3">
         <Image className="img-fluid mb-4" src={picture} alt="" rounded />
         <h3>{name}</h3>
         <p className="mt-4 text-secondary">{title}</p>
         <button className="mt-2 button-size">Order Now</button>
      </div>
   );
};

export default OurRecommendCart;
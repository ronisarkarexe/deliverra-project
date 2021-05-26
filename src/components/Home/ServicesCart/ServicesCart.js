import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServicesCart = (props) => {
   const {icon, name, description} = props.service
   return (
      <div className="col-md-4">
         <div className="ms-4 text-center mt-3 mb-5 pb-4">
            <h3>{name}</h3>
            <p className="text-secondary">{description}</p>
            <h6 className="text-color-button">Read More <FontAwesomeIcon icon={faArrowRight}/></h6>
         </div>
      </div>
   );
};

export default ServicesCart;
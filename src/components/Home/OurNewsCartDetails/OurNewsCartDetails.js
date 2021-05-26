import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OurNewsCartDetails = (props) => {
   const {name, date, description} = props.OurNewsCart;
   return (
      <section>
         <div>
            <h5>{name}</h5>
            <p className="text-secondary mt-3">{date}</p>
            <p className="text-secondary">{description}</p>
            <h6 className="text-color-button mb-4">Read More <FontAwesomeIcon icon={faArrowRight}/></h6>
         </div>
      </section>
   );
};

export default OurNewsCartDetails;
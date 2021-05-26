import React from 'react';
import { Image } from 'react-bootstrap';
import food from '../../../images/OurNews.PNG'
import OurNewsCartDetails from '../OurNewsCartDetails/OurNewsCartDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const OurNewsCarts = [
   {
      name: 'How Restaurants Can Engage with Millennials in 2021',
      date: 'Mar 12 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
   {
      name: 'Why You Should Optimize Your Menu for Delivery',
      date: 'Mar 12 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
   {
      name: 'Checklist for Launching a Successful Delivery Business',
      date: 'Mar 12 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
]

const OurNews = () => {
   return (
      <section className="container mt-5 pb-5 pt-5">
         <div className="text-center mt-4">
            <p className="text-color-p">OurNews</p>
            <h1>Latest News & Article</h1>
         </div>
         <div className="row mt-5 pt-3">
            <div className="col-md-7 mt-2">
               <Image className="img-fluid-ourNews" src={food} alt="" rounded />
               <h5 className="mt-3">How Restaurants Can Engage with Millennials in 2021</h5>
               <p className="text-secondary mt-3" >Mar 12 2021</p>
               <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
               <h6 className="text-color-button mb-4">Read More <FontAwesomeIcon icon={faArrowRight}/></h6>
            </div>
            <div className="col-md-5">
               {
               OurNewsCarts.map((OurNewsCart) => <OurNewsCartDetails OurNewsCart={OurNewsCart}></OurNewsCartDetails>)
               }
            </div>
         </div>
      </section>
   );
};

export default OurNews;
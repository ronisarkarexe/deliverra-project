import React, { Component } from 'react';
import ironMan from '../../../images/irene-strong.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from '../../../images/khoma.PNG'


const testimonials = [
   {
      picture: ironMan,
      name: 'Maxwell Green',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Robin Dillard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Jon Cary',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Robin Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Roni Sarkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      identity: 'Designation',
   },
   {
      picture: ironMan,
      name: 'Joni Sarkar',
      description: 'Lorem ipsum dolor sit amet',
      identity: 'Designation',
   },
]




class Testimonial extends Component {
   render() {

      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 3,
         className:"slides"
       };

      return (
         <section className="container mt-5">
            <div>
               <div className="text-center">
                  <p className="text-color-p">Our Testimonial</p>
                  <h1>What Our Client Says</h1>
                  <img className="img-fluid mt-4 mb-3" src={img} alt=""/>
               </div>
               <div style={{padding: 24}}>
                  <Slider {...settings}>
                     {
                        testimonials.map((testimonial) => {
                           return(
                              <div className="ms-4 mt-4">
                                 <div className="slider-testimonial">
                                    <p className="text-secondary">{testimonial.description}</p>
                                 </div>
                                 <div className="d-flex mt-4">
                                    <img className="img-fluid-costumer ms-4 me-5" src={testimonial.picture} alt=""/>
                                    <div>
                                       <h5 className="mt-1">{testimonial.name}</h5>
                                       <h6 className="text-secondary">COSTUMER</h6>
                                    </div>
                                 </div>
                              </div>
                           )
                        })
                     }
                  </Slider>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonial;
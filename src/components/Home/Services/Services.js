import React from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';

const services = [
   {
      icon: '',
      name: 'Faster Delivery',
      description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore'
   },
   {
      icon: '',
      name: 'Faster Delivery',
      description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore'
   },
   {
      icon: '',
      name: 'Faster Delivery',
      description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore'
   },
   {
      icon: '',
      name: 'Faster Delivery',
      description: 'Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore'
   },
]

const Services = () => {
   return (
      <section className="container mt-5">
         <div className="row">
            <div className="cart-columns">
               {
                  services.map((service) => <ServicesCart service={service}></ServicesCart>)
               }
            </div>
         </div>
      </section>
   );
};

export default Services;
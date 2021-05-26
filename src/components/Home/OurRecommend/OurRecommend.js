import React from 'react';
import shop from '../../../images/Shop.png'
import OurRecommendCart from '../OurRecommendCart/OurRecommendCart';

const recommendations = [
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      picture: shop,
      name: 'Depot Cak Dadang',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   }
]

const OurRecommend = () => {
   return (
      <div className="container">
         <div className="text-center">
            <h5 className="text-color-p mb-3">Our Recommendations</h5>
            <h1>Food & Groceries</h1>
         </div>
         <div className="row">
            <div className="cart-columns">
               {
                  recommendations.map((recommendation) => <OurRecommendCart recommendation={recommendation}></OurRecommendCart>)
               }
            </div>
         </div>
      </div>
   );
};

export default OurRecommend;
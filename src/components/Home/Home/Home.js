import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import DeliciousFood from '../DeliciousFood/DeliciousFood';
import GetStarted from '../GetStarted/GetStarted';
import HomeFont from '../HomeFont/HomeFont';
import HomeOrder from '../HomeOrder/HomeOrder';
import OurNews from '../OurNews/OurNews';
import OurRecommend from '../OurRecommend/OurRecommend';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
   return (
      <main>
         <Header></Header>
         <HomeFont></HomeFont>
         <Services></Services>
         <OurRecommend></OurRecommend>
         <DeliciousFood></DeliciousFood>
         <Testimonial></Testimonial>
         <HomeOrder></HomeOrder>
         <GetStarted></GetStarted>
         <OurNews></OurNews>
         <Footer></Footer>
      </main>
   );
};

export default Home;
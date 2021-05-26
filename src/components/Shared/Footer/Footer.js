import React from 'react';

const Footer = () => {
   return (
      <section className="mt-5 footer-bg-color">
         <div className="container">
            <div className="row mt-5 pb-4 pt-5">
               <div className="col-md-4 mt-4">
                  <h3 className="footer-text-color">Deliverra</h3>
                  <p className="footer-text-color mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore</p>
                  <h6 className="footer-text-color">Dhaka, Bangladesh-3984</h6>
                  <h6 className="footer-text-color mt-3">(+88)01714000000</h6>
               </div>
               <div className="col-md-2 mt-4">
                  <h5 className="footer-text">Quick Links</h5>
                  <div className="ouick-links mt-4">
                     <a href="#">About Us</a> <br/>
                     <a href="#">Become A Partner</a> <br/>
                     <a href="#">Our Team</a> <br/>
                     <a href="#">Blog</a> <br/>
                     <a href="#">Contact</a>
                  </div>
               </div>
               <div className="col-md-3 mt-4">
                  <h5 className="footer-text">Useful Links</h5>
                  <div className="ouick-links mt-4">
                     <a href="#">Privacy Policy</a> <br/>
                     <a href="#">Terms and Conditions</a> <br/>
                     <a href="#">Disclaimer</a> <br/>
                     <a href="#">Support</a> <br/>
                     <a href="#">FAQ</a>
                  </div>
               </div>
               <div className="col-md-3 mt-4">
                  <h5 className="footer-text">Download The App</h5>
                  <p className="footer-text-color mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                  <h6 className="footer-text-color">Available 24 /7 to answer your queries</h6>
               </div>
            </div>
            <hr className="mt-5 hr-color"/>
            <div>
               <footer className="footer-text-color mt-4">Copyright &copy; Deliverra 2021. All rights reserved. By Roni Sarkar</footer>
            </div>
         </div>
      </section>
   );
};

export default Footer;
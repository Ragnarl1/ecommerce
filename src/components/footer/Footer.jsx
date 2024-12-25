import React from 'react';
import './Footer.css'
import footerLogo from '../../assest/logo.jpg'
import footerIcon1 from '../../assest/footer/footericon1.svg'
import footerIcon2 from '../../assest/footer/footericon2.svg'
import footerIcon3 from '../../assest/footer/footericon3.svg'
import footerIcon4 from '../../assest/footer/footericon4.svg'
import footerIcon5 from '../../assest/footer/footericon5.svg'
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footerwrapper">
                <div className="footerbox">
                    <div className="container-fluid" style={{ padding: '0 45px' }}>
                        <div class="row">
                            <div class="col">
                                <div class="box d-flex align-items-center w-100">
                                    <span><img src={footerIcon1} style={{ width: '40px' }} /></span>
                                    <div class="info">
                                        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>Best prices &amp; offers</h4>
                                        <p style={{ fontSize: '15px', fontWeight: '400', color: '#7e7e7e', marginBottom: '8px' }}>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="box d-flex align-items-center w-100">
                                    <span><img src={footerIcon2} style={{ width: '40px' }} /></span>
                                    <div class="info">
                                        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>Free delivery</h4>
                                        <p style={{ fontSize: '15px', fontWeight: '400', color: '#7e7e7e', marginBottom: '8px' }}>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="box d-flex align-items-center w-100">
                                    <span><img src={footerIcon3} style={{ width: '40px' }} /></span>
                                    <div class="info">
                                        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>Great daily deal</h4>
                                        <p style={{ fontSize: '15px', fontWeight: '400', color: '#7e7e7e', marginBottom: '8px' }}>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="box d-flex align-items-center w-100">
                                    <span><img src={footerIcon4} style={{ width: '40px' }} /></span>
                                    <div class="info">
                                        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>Wide assortment</h4>
                                        <p style={{ fontSize: '15px', fontWeight: '400', color: '#7e7e7e', marginBottom: '8px' }}>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col">
                                <div class="box d-flex align-items-center w-100">
                                    <span><img src={footerIcon5} style={{ width: '40px' }} /></span>
                                    <div class="info">
                                        <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#212529', marginBottom: '8px' }}>Easy returns</h4>
                                        <p style={{ fontSize: '15px', fontWeight: '400', color: '#7e7e7e', marginBottom: '8px' }}>Orders $50 or more</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <footer style={{ padding: '45px 0 0' }}>
                    <div className="container-fluid" style={{ padding: '0 45px' }}>
                        <div className="row">
                            <div className="col-md-3">
                                <img src={footerLogo} alt='error' />
                                <br />
                                <br />
                                <p className='mb-4'>Awesome grocery store website template</p>
                                <p className='text-body-tertiary'><FaLocationDot className='fs-4 mb-2 me-2 text-success ' /><strong>Address: </strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                                <p className='text-body-tertiary'><FaHeadphonesAlt className='fs-4 mb-2 me-2 text-success' /><strong>Call Us:</strong>  (+91) - 8894454138</p>
                                <p className='text-body-tertiary'><IoMdMailUnread className='fs-4 mb-2  me-2 text-success' /><strong>Email:</strong> Workspace12202@gmail.com</p>
                                <p className='text-body-tertiary'><FaRegClock className='fs-4 mb-2 me-2 text-success' /><strong> Hours: </strong>  10:00 - 18:00, Mon - Sat</p>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col">
                                        <h3 className='fs-4 mb-4'>Company</h3>
                                        <ul className="footer-list p-0 ">
                                            <li className='footer-link'>About Us</li>
                                            <li className='footer-link'>Delivery Information</li>
                                            <li className='footer-link'>Privacy Policy</li>
                                            <li className='footer-link'>Terms & Conditions</li>
                                            <li className='footer-link'>Contact Us</li>
                                            <li className='footer-link'>Support Center</li>
                                            <li className='footer-link'>Careers</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3 className='fs-4 mb-4'>Company</h3>
                                        <ul className="footer-list p-0 ">
                                            <li className='footer-link'>About Us</li>
                                            <li className='footer-link'>Delivery Information</li>
                                            <li className='footer-link'>Privacy Policy</li>
                                            <li className='footer-link'>Terms & Conditions</li>
                                            <li className='footer-link'>Contact Us</li>
                                            <li className='footer-link'>Support Center</li>
                                            <li className='footer-link'>Careers</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3 className='fs-4 mb-4'>Company</h3>
                                        <ul className="footer-list p-0 ">
                                            <li className='footer-link'>About Us</li>
                                            <li className='footer-link'>Delivery Information</li>
                                            <li className='footer-link'>Privacy Policy</li>
                                            <li className='footer-link'>Terms & Conditions</li>
                                            <li className='footer-link'>Contact Us</li>
                                            <li className='footer-link'>Support Center</li>
                                            <li className='footer-link'>Careers</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h3 className='fs-4 mb-4'>Company</h3>
                                        <ul className="footer-list p-0 ">
                                            <li className='footer-link'>About Us</li>
                                            <li className='footer-link'>Delivery Information</li>
                                            <li className='footer-link'>Privacy Policy</li>
                                            <li className='footer-link'>Terms & Conditions</li>
                                            <li className='footer-link'>Contact Us</li>
                                            <li className='footer-link'>Support Center</li>
                                            <li className='footer-link'>Careers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row lasttrip" >
                            <div className="col-md-6"><p class="mb-0">© 2024, Ecommerce Template All rights reserved</p></div>
                            <div className="col-md-6 d-flex align-items-center justify-content-end">
                                <h5>Follow Us </h5>
                                <ul className="list list-inline d-flex ps-3">
                                    <li><FaFacebook  className='fs-3 text-success'/></li>
                                    <li><FaTwitterSquare className='fs-3 text-success'/></li>
                                    <li><FaInstagramSquare className='fs-3 text-success'/></li>
                                    <li><FaYoutube className='fs-3 text-success' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </footer>
            </section>



        </>
    )
}

export default Footer
import React, { useState } from 'react'
import './Navbar.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { CiCircleRemove } from "react-icons/ci";


const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMouseOver = (e) => {
        setIsHovered(e);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
      };
      const toggleremove =() =>{
        setIsMobileMenuOpen(false)
      }
    return (
        <>
            <div className="navbar d-flex align-items-center">
                <div className="container-fluid phone-item">
                    <div className="row d-flex align-items-center justify-content-between w-100">
                        <div className="col-sm-3 part-1 d-flex align-items-center">
                            <button className="btn btn-success d-flex align-items-center ">
                                <CiGrid41 className="me-1" /> Browse All Categories <MdKeyboardArrowDown className="ms-1" />
                            </button>
                        </div>
                        <div className="col-sm-7 part-2">
                            <ul className='nav-list d-flex align-items-center m-0  '>
                                <li><Link style={{ color: '#212529', textDecoration: 'none' }} to='/'>Home</Link></li>
                                <li onMouseOver={() => handleMouseOver('fashion')} onMouseOut={handleMouseOut}><Link style={{ color: '#212529', textDecoration: 'none' }} to='/Fashion'>Fashion</Link> <MdKeyboardArrowDown />
                                    {isHovered === "fashion" && (
                                        <ul className='big-menu'>
                                            <li>Men</li>
                                            <li>Women</li>
                                        </ul>
                                    )}
                                </li>
                                <li onMouseOver={() => handleMouseOver("Electronics")} onMouseOut={handleMouseOut}><Link style={{ color: '#212529', textDecoration: 'none' }} to='/Electronics'>Electroines</Link>  <MdKeyboardArrowDown />
                                    {isHovered === "Electronics" && (
                                        <ul className='big-menu'>
                                            <li>Computer And Accessories</li>
                                            <li>Smart Watch Accessories</li>
                                            <li>Mobiles</li>
                                        </ul>
                                    )}
                                </li>
                                <li>Bags</li>
                                <li onMouseOver={() => handleMouseOver('Footware')} onMouseOut={handleMouseOut}><Link style={{ color: '#212529', textDecoration: 'none' }} to='/Footware'>Footware</Link>  <MdKeyboardArrowDown />
                                    {
                                        isHovered === "Footware" && (
                                            <ul className='big-menu'>
                                                <li>Man Footware</li>
                                                <li>Women Footware</li>
                                            </ul>
                                        )
                                    }
                                </li>
                                <li onMouseOver={() => handleMouseOver("groceries")} onMouseOut={handleMouseOut}><Link style={{ color: '#212529', textDecoration: 'none' }} to='/Groceries'>Groceries</Link>  <MdKeyboardArrowDown />
                                    {
                                        isHovered === "groceries" && (
                                            <ul className='big-menu'>
                                                <li>Cooking Essentials</li>
                                                <li>Home Care</li>

                                            </ul>
                                        )
                                    }
                                </li>
                                <li>Beauty</li>
                                <li onMouseOver={() => handleMouseOver("Shop")} onMouseOut={handleMouseOut}>Shop <MdKeyboardArrowDown />
                                    {
                                        isHovered === "Shop" && (
                                            <ul className={`dropDownMenu ${isHovered === "Shop" ? "show" : ""}`}>
                                                <div className="row align-items-stretch justify-content-start">
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Fashion</span>
                                                        <ul className='list-unstyled dropDown_1 '>
                                                            <li className='fs-6 fw-lighter '>Men</li>
                                                            <li className='fs-6 fw-lighter '>Women</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Electronics</span>
                                                        <ul className='list-unstyled  dropDown_1'>
                                                            <li className='fs-6 fw-lighter'>Computer And Accessories</li>
                                                            <li className='fs-6 fw-lighter'>Smart Watch Accessories</li>
                                                            <li className='fs-6 fw-lighter'>Mobiles</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>Bags</span>
                                                        <ul className='list-unstyled dropDown_1'>

                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>FootWare</span>
                                                        <ul className='list-unstyled dropDown_1'>
                                                            <li className='fs-6 fw-lighter'>Man Footware</li>
                                                            <li className='fs-6 fw-lighter'>Women Footware</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <span style={{ color: '#198754' }} className='mb-4'>groceries</span>
                                                        <ul className='list-unstyled dropDown_1'>
                                                            <li className='fs-6 fw-lighter'>Cooking Essentials</li>
                                                            <li className='fs-6 fw-lighter'>Home Care</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2 part-3 d-flex align-items-center justify-content-between">
                            <span><FaHeadphonesAlt className='fs-3 text' /></span>
                            <div className="info">
                                <h3 className='fs-6 text m-0 text-success fw-bold'>1900 - 888</h3>
                                <p className='m-0 text-secondary'>24/7 Support Center</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Navbar */}
            <div className="mobile-navbar d-flex d-md-none">
                <button className="hamburger-menu" onClick={toggleMobileMenu}>
                    <FiMenu size={24} />
                </button>
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <ul className="mobile-nav-list">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Fashion">Fashion</Link>
                            </li>
                            <li>
                                <Link to="/Electronics">Electronics</Link>
                            </li>
                            <li>
                                <Link to="/Bags">Bags</Link>
                            </li>
                            <li>
                                <Link to="/Footware">Footware</Link>
                            </li>
                            <li>
                                <Link to="/Groceries">Groceries</Link>
                            </li>
                            <li>
                                <Link to="/Beauty">Beauty</Link>
                            </li>
                        </ul>
                        <button type='submit'  className='btn-remove' onClick={toggleremove}>
                        <CiCircleRemove  style={{color:'red',fontSize:'33px'}}/>
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}


export default Navbar
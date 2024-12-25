import React, { useState } from 'react';
import './Header.css';
import SelectDrop from '../selectDrop/SelectDrop';
import logo from '../../assest/logo.jpg';
import { CiSearch } from "react-icons/ci";
import { IoSyncOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Header = ({cartItems}) => {
 
    const [data, setData] = useState([
        'All Categories',
        'Mailk and Dairies',
        'Wines & Drinks',
        'Cloth & Beauty',
        'Fresh Seefood',
        'Pet Food & Toy',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice'

    ]);
    const [isOpen, setIsOpen] = useState(false)

   





    return (
        <>
            <header>
                <div className='container-fluid'>
                    <div style={{rowGap: '15px'}} className="row  d-flex align-items-center justify-between">
                        <div className="col-sm-2">
                            <img src={logo} alt='logo' />
                        </div>
                        <div className="col-sm-5 d-flex">
                            <div className="header-search d-flex align-item-center justify-content-center">
                                <SelectDrop data={data} />
                                <div className="search d-flex align-item-center justify-content-center">
                                    <input type='text' placeholder='Serach for items....' />
                                    <CiSearch className='search-icon' />
                                </div>

                            </div>

                        </div>
                        <div className="col-sm-5 ">
                            <ul className='list list-inline mb-0 headerTab d-flex align-item-center '>
                                <li><span > <IoSyncOutline className='me-1' /> <span className=" badge-1 rounded-circle bg-success ">3</span>Compare</span></li>
                                <li><span> <CiHeart className='me-1' /> <span className=" badge-1 rounded-circle bg-success ">3</span>Wishlist</span></li>
                                <li><Link style={{color:'#212529',textDecoration:'none'}}  to = '/cart'><span> <CiShoppingCart className='me-1' />  <span className=" badge-1 rounded-circle bg-success ">{cartItems.length}</span>Cart</span></Link>
                                </li>
                                <li><span onClick={() => setIsOpen(!isOpen)}> <CiUser className='me-1' />Account</span></li>
                            </ul>
                            { !isOpen === false &&
                                <ul className='dropDown'>
                                    <li><button className='btn_1'><CiUser /> My Account</button></li>
                                    <li><button className='btn_1'><CiLocationOn /> Order Tracking</button></li>
                                    <li><button className='btn_1'> <CiHeart /> My Wishlist</button></li>
                                    <li><button className='btn_1'> <CiSettings /> Setting</button></li>
                                    <li><button className='btn_1'> <LiaSignOutAltSolid /> Sign Out</button></li>
                                </ul>
                            }



                        </div>


                    </div>
                </div>
            </header>



        </>
    )
}

export default Header
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteSweep } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaGreaterThan } from "react-icons/fa6";
import './Cart.css'
import empty from '../../assest/empty.png'
import { IoHome } from "react-icons/io5";




const Cart = ({ cartItems = [] }) => {
    


    const [quantities, setQuantities] = useState(cartItems.map(() => 1));


    // Generic function to handle quantity change
    const updateQuantity = (index, change) => {
        setQuantities((prev) =>
            prev.map((quantity, i) => (i === index ? Math.max(1, quantity + change) : quantity))
        );
    };
    const removeItem = (index) => {
        cartItems.splice(index, 1); // Directly remove the item from the products array
        setQuantities((prev) => prev.filter((_, i) => i !== index)); // Remove the quantity associated with the product
    };
    // const [productList, setProductList] = useState([cartItems])
    // const calculateTotalAmount = () => {
    //     return productList.reduce((total, item) => total + (item.rate * item.quantity), 0);
    //   };
    const totalAmount = cartItems.reduce((acc, item, index) => {
        return acc + quantities[index] * item.rate;
    }, 0);

    return (
        <>
            <div className="container-fluid" style={{ padding: '20px 45px' }}>
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Your Cart</h1>
                        <div className="d-flex justify-content-between">
                            <h6>There are <span style={{ color: '#28a745', textDecoration: 'underline', padding: '0px 3px', textAlign: 'center' }}>{cartItems.length} </span>products in your cart</h6>
                            <h6 ><MdDeleteSweep /> Clear Items</h6>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mt-4">
                        <table className="table ">
                            <thead className=' tablehead' style={{ backgroundColor: '#ff6347', color: 'white' }}>
                                <tr className='base-line'>
                                    <th scope="col">
                                        <input type="checkbox" /> Product
                                    </th>
                                    <th scope="col">Unit Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody style={{ verticalAlign: 'middle' }}>
                                {cartItems && cartItems.length > 0 ? (
                                    cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <th style={{ display: 'flex', alignItems: "center", gap: '16px', justifyContent: 'flex-start' }}>
                                                <input type="checkbox" /> {item.productName}
                                                <img src={item.img} style={{ maxWidth: '60px', height: '60px', border: '1px solid #ececec', borderRadius: '15px' }} />
                                                <h6 className='brand'>{item.brand}</h6>
                                                <h6>{item.title}</h6>

                                            </th>
                                            <th style={{ color: '#7e7e7e' }}><BsCurrencyRupee />{item.rate}</th>
                                            <th>
                                                <div className='total-box d-flex justify-content-between align-items-center'>
                                                    <div className="total_number">{quantities[index]}</div>
                                                    <div className="increase_discrease ">
                                                        <FaGreaterThan onClick={() => updateQuantity(index, 1)} style={{ rotate: '-90deg', color: '#28a745', cursor: 'pointer', width: '7px' }} />
                                                        <br />
                                                        <FaGreaterThan onClick={() => updateQuantity(index, -1)} style={{ rotate: '90deg', color: '#28a745', cursor: 'pointer', width: '7px' }} />
                                                    </div>
                                                </div>
                                            </th>
                                            <th>
                                                <BsCurrencyRupee /> {quantities[index] * item.rate}
                                            </th>
                                            <th>
                                                <button
                                                    onClick={() => removeItem(index)}
                                                    style={{
                                                        backgroundColor: '#28a745',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '5px',
                                                        cursor: 'pointer',
                                                        padding: '5px 10px',
                                                    }}
                                                >
                                                    Remove
                                                </button>
                                            </th>


                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        
                                            <div className="empty_message pt-5">
                                                <img src={empty} alt='error' style={{ maxWidth: '150px' }} />
                                                <h3 style={{
                                                    color: '#212529',
                                                    fontSize: '28px'
                                                }}>Your Cart is currently empty</h3>
                                                <Link style={{ color: '#212529', textDecoration: 'none' }} to='/'><button class="btn mt-4" style={{ backgroundColor: '#fb641b', color: '#fff', display:'flex',alignItems:'center' }} type="button"> <IoHome /> Home</button></Link>

                                            </div>
                                        
                                    </tr>


                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4 pt-5">
                        <table>
                            <thead>
                                <tr className='cart_subtotal'>
                                    <th
                                        style=
                                        {{
                                            border: '1px solid grey',
                                            padding: '15px 20px ',
                                            fontSize: '15px',
                                            color: ' #253d4e',
                                            maxWidth: '35%'

                                        }}>Price ({cartItems.length} items) </th>
                                    <td style=
                                        {{
                                            maxWidth: "60%",
                                            textAlign: 'end',
                                            paddingRight: '10px',
                                            color: '#388e3c',
                                            border: '1px solid grey',
                                        }}>  <BsCurrencyRupee /> <span>{Number(totalAmount).toLocaleString("en-IN")}</span></td>
                                </tr>
                                <tr className='cart_subtotal'>
                                    <th
                                        style=
                                        {{
                                            border: '1px solid grey',
                                            padding: '15px 20px ',
                                            fontSize: '15px',
                                            color: ' #253d4e',
                                        }}>Discount </th>
                                    <td style={{
                                        maxWidth: "60%",
                                        textAlign: 'end',
                                        paddingRight: '10px',
                                        color: '#388e3c',
                                        border: '1px solid grey',
                                    }} > <BsCurrencyRupee /> </td>
                                </tr>
                                <tr className='cart_subtotal'>
                                    <th
                                        style=
                                        {{
                                            border: '1px solid grey',
                                            padding: '15px 20px ',
                                            fontSize: '15px',
                                            color: ' #253d4e',
                                        }}>Coupons for you </th>
                                    <td style={{
                                        maxWidth: "60%",
                                        textAlign: 'end',
                                        paddingRight: '10px',
                                        color: '#388e3c',
                                        border: '1px solid grey',
                                    }} > -<BsCurrencyRupee /> </td>
                                </tr>
                                <tr className='cart_subtotal'>
                                    <th
                                        style=
                                        {{
                                            border: '1px solid grey',
                                            padding: '15px 20px ',
                                            fontSize: '15px',
                                            color: ' #253d4e',
                                        }}>Delivery Charges</th>
                                    <td style={{
                                        maxWidth: "60%",
                                        textAlign: 'end',
                                        paddingRight: '10px',
                                        color: '#388e3c',
                                        border: '1px solid grey',
                                    }} > Free </td>
                                </tr>
                                <tr className='cart_subtotal'>
                                    <th
                                        style=
                                        {{
                                            border: '1px solid grey',
                                            padding: '15px 20px ',
                                            fontSize: '15px',
                                            color: ' #253d4e',
                                            maxWidth: '35%'

                                        }}>Total Amount </th>
                                    <td style=
                                        {{
                                            maxWidth: "60%",
                                            textAlign: 'end',
                                            paddingRight: '10px',
                                            color: '#388e3c',
                                            border: '1px solid grey',
                                        }}>  <BsCurrencyRupee /> <span>{Number(totalAmount).toLocaleString("en-IN")}</span></td>
                                </tr>
                            </thead>
                        </table>
                        <button class="btn mt-4" style={{ backgroundColor: '#fb641b', color: '#fff' }} type="button">PLACE ORDER</button>

                    </div>


                </div>

            </div>
        </>
    )













}

export default Cart
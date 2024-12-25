import React, { useState, useEffect } from 'react';
import './Home.css';
import banner1 from '../../assest/banner1.jpg';
import banner2 from '../../assest/banner2.jpg';
import banner3 from '../../assest/banner3.jpg';
import banner4 from '../../assest/banner4.jpg';
import banner5 from '../../assest/banner5.jpg';
import banner6 from '../../assest/banner6.jpg';
import { data } from '../Data';
import { list } from '../Data';
import { FaArrowRight } from "react-icons/fa";
import { productData } from '../Data';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdShoppingCartCheckout } from "react-icons/md";
import banner from '../../assest/fetureside.webp';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// feturebanner image import here
import feture1 from '../../assest/feturebanner/image1.webp'
import feture2 from '../../assest/feturebanner/image2.webp'
import feture3 from '../../assest/feturebanner/image3.webp'
import feture4 from '../../assest/feturebanner/image4.webp'
import feture5 from '../../assest/feturebanner/image5.webp'
import newsevent from '../../assest/feturebanner/newsletter.png';
import Cart from '../cartItem/Cart';




const Home = ({ setCartItems, cartItems }) => {
  const Banner = {
    image1: banner1,
    image2: banner2,
    image3: banner3,
    image4: banner4,
    image5: banner5,
    image6: banner6,
  };


  const colors = [
    "rgb(236, 255, 236)",
    "rgb(254, 239, 234)",
    "rgb(253, 240, 255)",
    "rgb(222, 243, 255)",
    "rgb(255, 232, 248)",
    "rgb(227, 255, 250)",
    "rgb(255, 243, 255)"];
  const fetureImages = [
    { img1: feture1 },
    { img1: feture2 },
    { img1: feture3 },
    { img1: feture4 },
    { img1: feture5 },

  ]

  // addtocart button function start here



  const handleAddCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  useEffect(() => {
    console.log("Current Cart State:", cartItems);
  }, [cartItems]);



  // product tab product data with button function start here
  const productTab = [

    { id: 2, text: 'Fashion', category: 'Fashion' },
    { id: 3, text: 'Electronics', category: 'Electronics' },
    { id: 4, text: 'Footware', category: 'Footware' },
    { id: 5, text: 'Groceries', category: 'Groceries' },
    { id: 6, text: 'Beauty', category: 'Beauty' },
    { id: 7, text: 'Wellness', category: 'Wellness' },
  ]
  const handleButtonClick = (category) => {


    setActive(category)
  }

  const [active, setActive] = useState('Fashion')

  const filteredProducts = productData.filter(product => product.category.toLowerCase() === active.toLowerCase());


  //home page slider banner

  const bannerImages = Object.values(Banner);


  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [bannerImages.length]);
  // banner end here



  // // feture items short and apply method start here

  const [randomItems, setRandomItems] = useState([]);
  const getRandomItems = (array, numItems) => {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numItems);
  };

  useEffect(() => {
    const selectedItems = getRandomItems(productData, 12);
    setRandomItems(selectedItems); // Set the random items to state
  }, [productData]);


  // react slick slide code
  const settings = {
    infinite: true,               // Allow infinite scroll
    speed: 500,                   // Transition speed
    slidesToShow: 4,              // Number of items to show at once
    slidesToScroll: 1,
    autoplay: true,               // Enable automatic sliding
    autoplaySpeed: 2000,               // Number of items to slide at once
    nextArrow: <button className="slick-next">Next</button>, // Next button
    prevArrow: <button className="slick-prev">Prev</button>, // Previous button
    responsive: [
      {
        breakpoint: 1024,         // At screen widths smaller than 1024px
        settings: {
          slidesToShow: 3,        // Show 3 items
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,          // At screen widths smaller than 768px
        settings: {
          slidesToShow: 1,        // Show 1 item
          slidesToScroll: 1,

        }
      }
    ]
  };



  return (
    <>
      {/* starting banner start here` */}
      <div className="container-fluid home">
        <div className="image-holder">
          {/* Display the current image */}
          <img
            src={bannerImages[currentIndex]}
            alt={`banner${currentIndex + 1}`}
            className="w-100 rounded-4"
          />
        </div>
      </div>

      {/* home part  2 start here */}
      <div className="container-fluid items">
        <div className="col-12">
          <h2 className='mb-2 fs-4 fw-medium mb-4' style={{ color: ' #212529' }}>Featured Categories</h2>
        </div>
        <div className="container m-0">
          <div className="productrow-1 d-flex " >
            {
              data.map((item, index) => {
                return (
                  <div className="col  slide-row d-flex flex-column align-items-center judtify-content-center p-0 ">
                    <div className="img-custom d-flex align-items-center justify-content-center"
                      style={{ backgroundColor: colors[index % colors.length] }}>
                      <img src={item.image} alt={item.alt} />
                    </div>

                    <h5 className='pt-3 fs-5.5 itemname'>{item.name}</h5>

                  </div>
                )
              })
            }

          </div>
        </div>

      </div>

      <section className='banners mb-4 mt-4'>
        <div className="container-fluid">
          <div className="row">
            {
              list.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6 round-2 mb-2">
                    <div className="banner_img position-relative">
                      <img src={item.img} alt={item.index} className='w-100 rounded-5' />
                      <div className="banner-text">
                        <h4 className='title'>{item.title}</h4>
                        <button
                          type='submit'
                          className='btn-1 border-0 px-2 py-1  text-white fs-6 fw-normal rounded-2'>
                          <span className="">{item.btnTitle}</span> <FaArrowRight className='fs-6 btn-text' />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>

      </section>
      {/* all product items show here */}
      <section className='product-tab pt-5 pb-5'>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-4 fs-3 ">Popular Products</div>
            <div className="col-md-8 btn-category justify-content-end">
              <div className="button-container d-flex overflow-auto">
                {productTab.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className="btn-slide border-0 mx-2 bg-transparent fs-6 p-2 fw-normal"
                    onClick={() => handleButtonClick(item.category)}
                  >
                    {item.text.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-2">
          <div className="productrow  ">
            {
              filteredProducts.map((product, index) => (
                <div className=" rounded-4 border p-0 allclass" key={product.index}>
                  <div className="imgwrapper rounded-top-4">
                    <img src={product.img} alt={product.title} className='w-100  cover' />
                    <ul className="overlay border-1 ">
                      <li><CiHeart className='text-success' /></li>
                      <li><MdOutlineRemoveRedEye className='text-success' /></li>
                    </ul>
                  </div>
                  <div className="info p-3">
                    <span className='mb-1 ' style={{ fontSize: '13px' }}>{product.category}</span>
                    <h4 style={{ overflow: "hidden", fontSize: "13px", fontWeight: "600", marginTop: "10px", fontFamily: "Roboto" }}>{product.brand}</h4>
                    <h5 style={{ fontSize: "11px", fontFamily: "Roboto, sans-serif" }}>BY <span style={{ color: '#35ac75', }}>{product.title}</span></h5>
                    <div className="rate  d-flex align-items-center justify-content-between">
                      <div className="rate_1 d-flex align-items-center ">
                        <span style={{ color: "#35ac75", fontSize: "17px", marginRight: '6px', fontWeight: '600' }}>Rs {product.rate}</span>
                        <span className='text-decoration-line-through text-muted'>Rs {product.oldprice}</span>
                      </div>
                      <div className="add-cart">
                        <button type='submit' className='cartbtn' onClick={() => handleAddCart(product, index)}><MdShoppingCartCheckout style={{ fontSize: "18px", paddingBottom: "3px" }} /><span>Add</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      {/* banner section start here */}
      <section className="bannersection">
        <div className="container-fluid">
          <div className="row">
            <Slider {...settings} className='w-100'>
              {
                fetureImages.map((item, index) => (
                  <div className="col rounded-4">
                    <div className="box">
                      <img src={item.img1} alt='error' className='w-100 rounded-4 cover' />
                    </div>
                  </div>
                ))
              }
            </Slider>

          </div>
        </div>
      </section>

      {/* feture start here */}
      <section className='homeproducts'>
        <div className="container-fluid">
          <div className="d-flex">
            <h4>Featured Products</h4>
          </div>
          <div className="row">

            <div className="col-md-9 custom">
              <Slider {...settings} className=' slick-slider  '>
                {randomItems.map((item, index) => (

                  <div className="rounded-4 border p-0  allclass feture-items " key={index}>
                    <div className="imgwrapper rounded-4">
                      <img src={item.img} alt={item.title} className='w-100 rounded-4' />
                      <ul className="overlay border-1">
                        <li><CiHeart className='text-success' /></li>
                        <li><MdOutlineRemoveRedEye className='text-success' /></li>
                      </ul>
                    </div>
                    <div className="info p-3">
                      <span className='mb-1' style={{ fontSize: '13px' }}>{item.category}</span>
                      <h4 style={{ overflow: "hidden", fontSize: "13px", fontWeight: "600", marginTop: "10px", fontFamily: "Roboto" }}>
                        {item.brand}
                      </h4>
                      <h5 style={{ fontSize: "11px", fontFamily: "Roboto" }}>
                        BY <span style={{ color: '#35ac75' }}>{item.title}</span>
                      </h5>
                      <div className="rate d-flex align-items-center">
                        <span style={{ color: "#35ac75", fontSize: "17px", marginRight: '20px' }}>Rs {item.rate}</span>
                        <span className='text-decoration-line-through text-muted'>Rs {item.oldprice}</span>
                      </div>
                    </div>
                  </div>
                ))}

              </Slider >

            </div>
            <div className="col-md-3" style={{ paddingRight: '46PX' }}>
              <img src={banner} alt='error' className='w-100' />
            </div>


          </div>
        </div>
      </section>
      {/* newsletter section start here */}
      <section className="bannersection">
        <div className="container-fluid" >
          <div className="newsbox d-flex  flex-wrap align-items-center">
            <div className="news-info" >
              <h2 className='banner-style' >Stay home & get your daily needs from our shop</h2>
              <p style={{ fontSize: '22px', color: '#7e7e7e', marginBottom: '16px' }}>Start You'r Daily Shopping with Nest Mart</p>
              <div className="news-input" >
                <IoIosSend className='svgstyle' />
                <input type='text' placeholder='your email address' className='news_input_add' />
                <button type='submit' className='newsletterbtn' >Subscribe</button>
              </div>
            </div>
            <div className="news-img" >
              <img src={newsevent} alt='error' className="w-100" />
            </div>
          </div>
        </div>

      </section>
      {/* <Cart cartItem={cartItems} /> */}





    </>
  );
};

export default Home;

import React, { useState } from 'react'
import fsimage from '../../assest/feture1.png'
import ele from '../../assest/ele.png';
import bags from '../../assest/bags.png';
import footware from '../../assest/footware.png';
import groceries from '../../assest/groceries.png';
import beauty from '../../assest/beauty.png';
import wellness from '../../assest/wellness.png';
import fetureside from '../../assest/fetureside.webp'
import sidebanner from '../../assest/sidebanner.webp';
import { productData } from '../Data';
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { newProduct } from '../Data';
import { Link } from 'react-router-dom';
const Fashion = () => {

  const productTab = [

    { id: 2, text: 'Fashion', category: 'Fashion', image: fsimage },
    { id: 3, text: 'Electronics', category: 'Electronics', image: ele },
    { id: 4, text: 'Footware', category: 'Footware', image: bags },
    { id: 5, text: 'Groceries', category: 'Groceries', image: footware },
    { id: 6, text: 'Beauty', category: 'Beauty', image: groceries },
    { id: 7, text: 'Wellness', category: 'Wellness', image: beauty },
  ]


  const [activeData, setActiveData] = useState('Fashion')


  const filteredProducts = productData.filter(product => product.category.toLowerCase() === activeData.toLowerCase());


  const handleData = (event) => {

    setActiveData(event)

  }
  return (
    <>
      <div className="container-fluid" style={{ marginBottom: '20px', padding: '25px 45px', backgroundColor: '#d8f1e5', borderRadius: '20px',  margin: '0 auto' }}>
        <h1 className='text-caption' >{activeData}</h1>
        <ul style={{ padding: '0px' }}>
          <li style={{ listStyleType: 'none', }}><Link style={{ color: '#000', textDecoration: 'none' }} to='/'>Home</Link></li>
        </ul>

      </div>
      <div className="container-fluid " style={{ padding: '25px 45px' }}>
        <div className="listdata">
          <div className="row">
            <div className="col-md-3 sideWrapper">
              <div className="sideBar">
                <div className="card  " >
                  <h3> Category</h3>
                  <div className="card-list">

                    {
                      productTab.map((item) => {
                        return (

                          <button key={item.id} type='submitt' className='catitem d-flex align-items-center' onClick={() => { handleData(item.category) }}>
                            <span style={{ width: '20px' }}><img src={item.image} alt='error' className='w-100' /></span>
                            <h4 className='mb-0 textCapital'>{item.text}</h4>
                            {/* <div className="cont" style={{float:'inline-end'}}>{filteredProducts.length}</div> */}

                          </button>


                        )
                      })
                    }


                  </div>
                </div>
                <div className="card">
                  <h3> New Products</h3>
                  {
                    newProduct.map((item, index) => (
                      <div className="single-post d-flex " key={item.index}
                        style={{
                          marginBottom: '10px',
                          borderBottom: ' 1px dotted rgba(0, 0, 0, 0.15);',
                          paddingBottom: '10px'
                        }}>
                        <div className="image"
                          style={{
                            width: '80px',
                            height: '80px',
                            float: 'left',
                            marginRight: '10px',
                            overflow: 'hidden'
                          }}>
                          <img src={item.image} alt={item.title} className='w-100' />
                        </div>
                        <div className="newContent">
                          <h5 className=''
                            style={{
                              fontSize: '20px',
                              color: '#35ac75',
                              fontWeight: '700',

                            }}
                          >{item.title}</h5>
                          <p style={{
                            marginTop: '5PX',
                            fontSize: '16px',
                            color: '#7e7e7e'
                          }}>{item.rate}</p>
                        </div>

                      </div>
                    ))
                  }

                </div>
                <div className="card p-0 ">
                  <img src={sidebanner} alt='Error' width={100} className='m' />
                </div>
                <div className="card p-0">
                <img src={fetureside} alt='error' className='rounded-3'/>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="toltip"><p className='mb-0' style={{ fontSize: '20px', color: '#7e7e7e', paddingBottom: '30PX' }}>We Found <span style={{ color: '#35ac75', fontWeight: '600' }}>{filteredProducts.length}</span> items For You!</p></div>
              <div className="productrow_fashion">
                {
                  filteredProducts.map((product) => (
                    <div className=" rounded-4 border p-0 allclass" key={product.index}>
                      <div className="imgwrapper rounded-4">
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
                        <div className="rate d-flex align-items-center  ">
                          <span style={{ color: "#35ac75", fontSize: "17px", marginRight: '20PX', fontWeight: '600' }}>Rs {product.rate}</span>
                          <span className='text-decoration-line-through text-muted'>Rs {product.oldprice}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Fashion
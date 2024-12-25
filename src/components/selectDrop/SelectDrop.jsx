import React, { useState } from 'react'
import '../selectDrop/SelectDrop.css'
import { IoMdArrowDropdown } from "react-icons/io";

const SelectDrop = ({ data }) => {
    const [isopen, setisopen] = useState(false);
    const [selectedIndex, setselectedIndex] = useState(0);
    const [selectItem, setselectItem] = useState('All Categories');
    const [searchTerm, setSearchTerm] = useState('');

    const openselect = () => {
        setisopen(!isopen);
    }
    const closeSelect = (index, name) => {
        setselectedIndex(index);
        setselectItem(name);
        setisopen(false);
        setSearchTerm('');
    }


    // Handle input change
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
      
    };
    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())

    );

    return (
        <>
            <div className="selectDrop  ">
                <span className='openselect' onClick={openselect}>{selectItem}<IoMdArrowDropdown /></span>
                {
                    isopen === true && <div className="select-Drop">
                        <div className="search-field">
                            <input type='text' placeholder='Search Here...' value={searchTerm}
                                onChange={handleChange} />
                            <ul className='resultitems'>
                                {
                                    filteredData.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => closeSelect(index, item)} className={`${selectedIndex === index ? 'active' : ""}`}> {item}</li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                }


            </div>

        </>
    )
}

export default SelectDrop
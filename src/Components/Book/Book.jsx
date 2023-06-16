import { useState } from 'react'
import React from "react"
import './book.css'

const Dropdown = ({selectedCar, setSelectedCar}) => {
    const [isActive, setIsActive] = useState(false)
    const options = ['Select a car','Toyato', 'Honda']
 return(
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => setIsActive(!isActive)} >
            {selectedCar}
        </div>
        {isActive && (
        <div className='dropdown-content'>
            {options.map(option => (
                <div onClick={e => {
                    setSelectedCar(option)
                    setIsActive(false)
                    }}
                className='dropdown-item'>{option}</div>
                ))}
            
        </div>
        )}

    </div>
 )
}

const Book = () => {
    const [selectedCar, setSelectedCar] = useState("");
    return(
        <div className="book__container">
            <div className="book__container-header">
                <h2>Book a car</h2>
            </div>
            <div className="book__container-search">
                <div className='car-type'>
                    <p>Select your car type</p>
                </div>



                <Dropdown selectedCar ={selectedCar} setSelectedCar={setSelectedCar}/>
                
                
            </div>
        </div>
    );
}

export default Book;
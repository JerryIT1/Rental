import { useState } from 'react'
import React from "react"
import './book.css'

const Dropdown = () => {
    const [state, setState] = useState(false)

    const showDropdown =() =>{
        setState(true)
    }

    const hideDropdown = () =>{
        setState(false)
    }
}

const Book = () => {
    const [state, setState] = useState(false)

    const showDropdown =() =>{
        setState(true)
    }

    const hideDropdown = () =>{
        setState(false)
    }
    return(
        <div className="book__container">
            <div className="book__container-header">
                <h2>Book a car</h2>
            </div>
            <div className="book__container-options" onClick={showDropdown}>
                Select your car
                    {state ?(<ul>
                        <li>Porsche</li>
                        <li>Farari</li>
                    </ul>):null}
            </div>
            <div className="book__container-search">

            </div>
        </div>
    );
}

export default Book;
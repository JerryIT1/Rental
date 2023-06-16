import React from "react"
import './information.css'
import car from './Assets/select.png'
import support from './Assets/support.png'
import weather from './Assets/weather.png'

const Info = (props) =>{
    return(
        <div className="perks-singles">
            <img src={props.img} className="perks-image"/>
            <p>{props.desc}</p>
        </div>
    )
}

const Information = () => {
    return(
        <div className="info__container">
            <div className="info__container-header">
                Plan your trip now
            </div>
            <div className="info__container-brand">
                Quick & easy car rental
            </div>
            <div className="info__container-perks">
                <Info 
                img = {car}
                desc = {"How are you"}
                />
            </div>
        </div>
    )
}

export default Information;
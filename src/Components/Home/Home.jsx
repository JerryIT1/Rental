import React from "react"
import './home.css'
import Car from './Assets/Car.png'

const Home = () => {
    return(
        <div className="home__container">
            <div className="home__container-information">
                <h2 className="plan">
                    Plan your trip now
                </h2>
                <h1 className="save">
                    Save <span className="big">big</span> with our car rental
                </h1>
                <p className="deals">
                    Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more
                </p>
                <div className="home__container-information-btn">
                    <button className="home-btn btn-book">
                        Book Ride
                    </button>
                    <button className="home-btn btn-learn">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="home__container-image">
                <img className="home_car" src={Car}/>
            </div>
        </div>
    );
}

export default Home;
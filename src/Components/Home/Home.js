import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus,faMotorcycle,faTrain,faCar } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
const Home = () => {
    return (
        <div className="home-design">
            <div className="ride-boxes">
                <div>
                    <FontAwesomeIcon className="icons" icon={faMotorcycle}></FontAwesomeIcon>
                </div>
                <div>
                    <h1>Bike</h1>
                </div>
            </div>
            <div className="ride-boxes">
                <div>
                    <FontAwesomeIcon className="icons" icon={faCar}></FontAwesomeIcon>
                </div>
                <div>
                    <h1>Car</h1>
                </div>
            </div>
            <div className="ride-boxes">
                <div>
                    <FontAwesomeIcon className="icons" icon={faBus}></FontAwesomeIcon>
                </div>
                <div>
                    <h1>Bus</h1>
                </div>
            </div>
            <div className="ride-boxes">
                <div >
                    <FontAwesomeIcon className="icons" icon={faTrain}></FontAwesomeIcon>
                </div>
                <div>
                    <h1>Train</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = (props) => {
    // console.log(props.data)
    const { rideName, rideImage } = props.data;
    console.log(rideImage);
    return (
        
            <Link to="/destination" className="ride-boxes">
                <div style={{ width: '100%' }}>
                    <img className="images-style" src={rideImage} alt="" />
                </div>
                <h1>{rideName}</h1>
            
        </Link>

    );
};

export default Home;
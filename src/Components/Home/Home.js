import React from 'react';
import './Home.css';
const Home = (props) => {
    // console.log(props.data)
    const { rideName, rideImage } = props.data;
    console.log(rideImage);
    return (
        
            <div className="ride-boxes">
                <div style={{ width: '100%' }}>
                    <img className="images-style" src={rideImage} alt="" />
                </div>
                <h1>{rideName}</h1>
            
        </div>

    );
};

export default Home;
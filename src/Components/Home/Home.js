import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Home.css';
const Home = (props) => {
    const history=useHistory();
    // console.log(props.data)
    const { id,rideName, rideImage } = props.data;
    console.log(rideImage);
    const handleOnClick=elementId=>{
        const url=`destination/${rideName}/${elementId}`;
        history.push(url);
    }
    return (
        
            <Link onclick={() =>handleOnClick(id)} to="/destination" className="ride-boxes">
                <div style={{ width: '100%' }}>
                    <img className="images-style" src={rideImage} alt="" />
                </div>
                <h1>{rideName}</h1>
            
        </Link>

    );
};

export default Home;
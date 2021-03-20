import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './HomeItems.css'

const HomeItems = (props) => {
    const { id, rideName, rideImage } = props.data;
    console.log(props);
    const history = useHistory();
    const handleOnClick = elementId => {
            // const url = `destination/${rideName}/${elementId}`;
            // history.push(url);
        }
    return (
        <Link onclick={() => handleOnClick(id)}  className="ride-boxes">
                    <div style={{ width: '100%' }}>
                        <img className="images-style" src={rideImage} alt="" />
                    </div>
                    <h1>{rideName}</h1>

        </Link>
    );
};

export default HomeItems;
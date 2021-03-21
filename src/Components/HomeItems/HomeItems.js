import React from 'react';
import { useHistory } from 'react-router';
import './HomeItems.css'

const HomeItems = (props) => {
    const { id, rideName, rideImage } = props.data;
    const history = useHistory();
    const handleOnClick = elementId => {
            const url = `destination/${rideName}/${elementId}`;
            history.push(url);
        }
    return (
        <div onClick={()=>{ handleOnClick(id)}}  className="ride-boxes">
                    <div style={{ width: '100%' }}>
                        <img className="images-style" src={rideImage} alt="" />
                    </div>
                    <h1>{rideName}</h1>

        </div>
    );
};

export default HomeItems;
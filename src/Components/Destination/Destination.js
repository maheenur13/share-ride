import React from 'react';
import './Destination.css';

import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = () => {

    const handleSubmit=(e) => {
        console.log('submitted');
        e.preventDefault();
    }
    return (
        <div className="destination-page-design">
            <div className="form-box">
                <form className="form-style">
                    <label for="from">Pick From</label>
                    <input name="from" type="text" defaultValue="Mirpur-11"></input>
                    <label style={{marginTop:'10px'}} for="to">Pick To</label>
                    <input name="to" type="text" defaultValue="Dhanmondi"></input>
                    <input style={{marginTop:'15px',backgroundColor:'#FFA500',border:'none'}} type="submit" value="search" onClick={handleSubmit}></input>
                </form>
            </div>
            <div className="map-box">
                <GoogleMap  ></GoogleMap>
                </div>
            
        </div>
    );
    
};
export default Destination;


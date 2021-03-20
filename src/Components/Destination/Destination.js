import React, { useState } from 'react';
import './Destination.css';

import GoogleMap from '../GoogleMap/GoogleMap';


const Destination = (props) => {
    const [destinationInfo,setDestinationInfo]= useState({
        isSearchedCliked:false,

    });
    const handleForm=e=>{
        if(e.target.name==='from'){
        const newInfo ={...destinationInfo};
        newInfo.from=e.target.value;
        setDestinationInfo(newInfo);
        }
        if(e.target.name==='to'){
        const newInfo ={...destinationInfo};
        newInfo.to=e.target.value;
        setDestinationInfo(newInfo);
        }
    }
console.log('valuess',props)
    const handleSubmit=(e) => {
        const newInfo = {...destinationInfo};
        newInfo.isSearchedCliked=true;
        setDestinationInfo(newInfo);
        e.preventDefault();
    }
    return (
        <div className="destination-page-design">
            <div className="form-box">
                {!destinationInfo.isSearchedCliked ? <form onSubmit={handleSubmit} className="form-style">
                    <label for="from">Pick From</label>
                    <input onBlur={handleForm} name="from" type="text" placeholder="Mirpur-11" required></input>
                    <label  style={{marginTop:'10px'}} for="to">Pick To</label>
                    <input onBlur={handleForm} name="to" type="text" placeholder="Dhanmondi" required></input>
                    <input style={{marginTop:'15px',backgroundColor:'#FFA500',border:'none'}} type="submit" value="search" ></input>
                </form>:
                <div>
                    <p>{destinationInfo.from}</p>
                    <p>{destinationInfo.to}</p>
                </div>
                }
            </div>
            <div className="map-box">
                <GoogleMap  ></GoogleMap>
                </div>
            
        </div>
    );
    
};
export default Destination;


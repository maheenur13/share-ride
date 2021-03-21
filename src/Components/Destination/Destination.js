import React, { useEffect, useState } from 'react';
import './Destination.css';
import fakeData from '../FakeData/FakeData.json';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUsers } from '@fortawesome/free-solid-svg-icons'

const Destination = () => {
    const [newData,setNewData]=useState([]);
    const [newSingleData,setNewSingleData]=useState([]);
    const [destinationInfo,setDestinationInfo]= useState({
        isSearchedCliked:false,
    });


    const {elementId}=useParams();
    useEffect(()=>{
        setNewData(fakeData);
    },[elementId])
    const singleData = newData.find(data=>data.id===parseInt(elementId));

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
        if(e.target.name==='date'){
            const newInfo ={...destinationInfo};
            newInfo.date=e.target.value;
            setDestinationInfo(newInfo);
        }
    }
// console.log('valuess',props)
    const handleSubmit=(e) => {
        const newInfo = {...destinationInfo};
        newInfo.isSearchedCliked=true;
        setDestinationInfo(newInfo);
        e.preventDefault();
    }
    const destinationDesign={
        backgroundColor:'white',
        padding: '5px'
    }
    return (
        <div className="destination-page-design">
            <div className="form-box">
                {!destinationInfo.isSearchedCliked ? <form onSubmit={handleSubmit} className="form-style">
                    <label >Pick From</label>
                    <input onBlur={handleForm} name="from" type="text" placeholder="Mirpur-11" required></input>
                    <label  style={{marginTop:'10px'}}>Pick To</label>
                    <input onBlur={handleForm} name="to" type="text" placeholder="Dhanmondi" required></input>
                    <label>Select A Date</label>
                    <input name="date" type="date" onBlur={handleForm} required></input>
                    <input style={{marginTop:'15px',backgroundColor:'#FFA500',border:'none'}} type="submit" value="search" ></input>
                </form>:
                <div>
                    <p style={destinationDesign}>{destinationInfo.from}</p>
                    <p style={{textAlign:'center',color:'white',fontWeight:'bold'}}>To</p>
                    <p style={destinationDesign}>{destinationInfo.to}</p>
                    <p style={destinationDesign}>Date: {destinationInfo.date}</p>
                    <div style={{border:'1px solid green',display:'flex',justifyContent:'space-between',padding:'15px',alignItems: 'center',backgroundColor:'white'}}>
                        <div style={{width:'100px'}}>
                            <img style={{width:'100%' }} src={singleData.rideImage} alt="" />
                        </div>
                        <FontAwesomeIcon style={{fontSize:'20px'}} icon={faUsers}/>
                        <p>{singleData.rentAmount}</p>
                    </div>
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


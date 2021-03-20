import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Home.css';
import fakeData from '../FakeData/FakeData.json';
import HomeItems from '../HomeItems/HomeItems';
const Home = (props) => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        setAllData(fakeData);

    }, [])
    const history = useHistory();
    // const { id, rideName, rideImage } = props.data;
    // console.log(rideImage);
    // const handleOnClick = elementId => {
    //     const url = `destination/${rideName}/${elementId}`;
    //     history.push(url);
    // }
    return (

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            {
                allData.map((data) =><HomeItems data={data} ></HomeItems>)
            }         
        </div>
    );
};

export default Home;
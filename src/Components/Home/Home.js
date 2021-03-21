import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Home.css';
import fakeData from '../FakeData/FakeData.json';
import HomeItems from '../HomeItems/HomeItems';
const Home = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        setAllData(fakeData);
    }, [])
    const history = useHistory();
    return (

        <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexWrap:'wrap'}}>
            {
                allData.map((data) =><HomeItems data={data} key={data.id} ></HomeItems>)
            }         
        </div>
    );
};

export default Home;
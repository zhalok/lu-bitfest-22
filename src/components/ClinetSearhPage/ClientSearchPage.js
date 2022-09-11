import React, { useEffect, useState } from "react";
import Title_bar from '../common/Title_bar';
import Footer from "../common/footer/Footer";
import LocationSearchBar from "../common/LocationSearchBar";
import Notification from "../common/Notification";
import './style.css';
import axios from "axios";

const ClinetSearhPage=()=>{
    const [position,setPosition]=useState(null);
    const [service,setService]=useState(null);
    const [text,setText]=useState(null);
    const Search=()=>{
        if(position==null||service==null)
            setText("Location or service invalid");
        else
            axios.get(`http://localhost:3001/searchworker?longitude=${position.longitude}&latitude=${position.latitude}&service_name=${service}`).then(res=>{
                console.log(res.data)
                setText(`found ${res.data.length} workers`);
            })
        console.log(service)
        console.log(position)
            
    }
    return(
        <div>
            <Title_bar page="clientPage"/>
            <div id="searchdiv">
                <div id="inputfields">
                    <LocationSearchBar setPosition={setPosition} position={position}/>
                    
                    <div id="searchbutton" onClick={Search}>Search</div>
                </div>
            </div>
            <Footer/>
            <Notification text={text} setText={setText}/>
        </div>
    )
}


export default ClinetSearhPage;
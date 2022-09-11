import React, { useEffect, useState } from "react";
import '../common/Title_bar';
import TitleBar from "../common/Title_bar";
import Footer from "../common/footer/Footer";
import './style.css';
import axios from "axios";


const LandingPage=()=>{
    const [counts,setCounts]=useState({})
    useEffect(()=>{
        axios.get("http://localhost:3001/landingpagecount").then(res=>{
            setCounts(res.data)
        })
    },[])
    return(
        <div>
            <TitleBar page="landing" style={{"border-bottom":"0px solid white"}}/>
            <img src="./pics_icons/busstand.jpg" id="landing_img"></img>
            <div id="Manush_lagbe"><b>বাস লাগবে ?</b></div>
            <div id="we_are_here">We are here for you</div>
            
            <div id="whymms">
                    <div id="whymmstitle"><b>Why UTS?</b></div>
                    <div id="whymmstxt">
                    University Transport System has made to search for<br></br> buses for a specific route and timeslot. Consumers can request for a seat very easily.
                    Also finding current location of bueses through UTS is easier. 
                    </div>
            </div>
            <Footer/>
        </div>
    )
}
export default LandingPage;
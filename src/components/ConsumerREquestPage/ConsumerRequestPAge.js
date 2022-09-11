import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./style.css"
import { useState } from "react";
 const ConsumerRequestPage=()=>{
    const role = ["Student", "Teacher", "Staff"]
    
    return(
        <div id="container">
            <TitleBar page="clientPage"/>
            <div id="signUp">
                <div id="signupttxt">Consumer Request Page</div>
                
             
    <select type="name" class="roles" id="roles" placeholder="Select Role">
                <option value="none" selected disabled hidden>Select Option for pickup stoppage</option>
        <option value="student">Sust Gate</option>
        <option value="teacher">Topobon </option>
        <option value="staff">Amborkhana</option>
        <option value="staff">Bondor</option>
        <option value="staff">Mirabazar</option>
        <option value="staff">Temukhi bus stand</option>
    </select>

    <select type="name" class="roles" id="roles" placeholder="Select Role">
                <option value="none" selected disabled hidden>Select Timeslot</option>
        <option value="08 AM">08 AM</option>
        <option value="09 AM">09 AM </option>
        <option value="10 AM">10 AM</option>
        <option value="01 PM">01 PM</option>
        <option value="03 PM">03 PM</option>
        <option value="04 PM">04 PM</option>
        <option value="05 PM">05 PM</option>
        <option value="07 PM">07 PM</option>
    </select>
                <div id="signupbutttton">Request for a seat</div>
                </div>
            <Footer/>
        </div>
    )
 }
 export default ConsumerRequestPage;
 
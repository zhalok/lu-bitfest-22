import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "./style.css"
import { useState } from "react";
 const SignUpAsClient=()=>{
    const role = ["Student", "Teacher", "Staff"]
    
    return(
        <div id="container">
            <TitleBar page="signUp"/>
            <div id="signUp">
                <div id="signuptxt">Sign Up as Consumer</div>
                <input type="name" class="signupinput" id="name" placeholder="Full Name"/>
                <input class="signupinput" id="ID" placeholder="ID number"/>
                {/* <input class="signupinput" id="role" placeholder="Select Role"/> */}
                
                <input class="signupinput" id="email" placeholder="Email"/>
                <input type="password" class="signupinput" id="password" placeholder="password"/>
                
                <select type="name" class="roles" id="roles" placeholder="Select Role">
                <option value="none" selected disabled hidden>Select Option for Role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher </option>
        <option value="staff">Staff</option>
    </select>
    <select type="name" class="roles" id="roles" placeholder="Select Role">
                <option value="none" selected disabled hidden>Select Option for pickup stoppage</option>
        <option value="student">Sust Gate</option>
        <option value="teacher">Topobon </option>
        <option value="staff">Amborkhana</option>
        <option value="staff">Bondor</option>
        <option value="staff">Mirabazar</option>
        <option value="staff">Temukhi bus stand</option>
    </select>
                <div id="signupbuttton"><Link to="/studentprofile">Sign Up</Link></div>
                        
                <div id="alreadyhaveaccount">Already have an account?<Link to="/login"><font id="logIn">Log In</font></Link></div>
                </div>
            <Footer/>
        </div>
    )
 }
 export default SignUpAsClient;
 
import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";
import "./style.css"
 const SignUpAsWorker=()=>{
    return(
        <div id="container">
            <TitleBar page="signUp"/>
            <div id="signUp">
                <div id="signuptxt">Sign Up as Transport Dept. official/staff</div>
                <input type="name" class="signupinput" id="name" placeholder="Full Name"/>
                <input class="signupinput" id="number" placeholder="Contact Number"/>
                <input class="signupinput" id="email" placeholder="Email"/>
                <input type="password" class="signupinput" id="password" placeholder="password"/>
                <div id="signupbutton">Sign Up</div>
                <div id="alreadyhaveaccount">Already have an account?<Link to="/login"><font id="logIn">Log In</font></Link></div>
            </div>
            <Footer/>
        </div>
    )
 }
 export default SignUpAsWorker;

import React from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";
import { Link } from "react-router-dom";
import "./style.css"
 const SignUp1=()=>{
    return(
        <div id="container">
            <TitleBar page="signup"/>
            <div id="signup">
            
                <div id="signuptxt">Sign up as</div>
                <div>
                    <div className="rectangle1">
                    <Link to="/signup2">
                        <img class="picture" src="./pics_icons/employee.png"/>
                        </Link>
                        <div class="rectext">Dept. Official</div>
                    </div>
                    <div className="rectangle2">
                    <Link to="/signup3">
                        <img class="picture" src="./pics_icons/customer.png"/>
                        </Link>
                        <div class="rectext">Consumer</div>
                    </div>
                </div>
                <br/><br/><br/>
                <div id="alreadyhaveaccount">Already have an account?<Link to="/login"><font id="logIn">Log In</font></Link></div>
            </div>
            <Footer/>
        </div>
    )
 }
 export default SignUp1;

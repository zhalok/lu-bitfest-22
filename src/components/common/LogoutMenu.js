import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'



const LogoutMenu=({setMenuVis})=>{

    const naviagte=useNavigate()
    
    let Logout=()=>{
        localStorage.clear();
        setMenuVis(false);
        naviagte('/')
    }


    return(
    <div id="lgm">
        <div class="logoutmenuitem" onClick={Logout}>
            Logout
        </div>
       
    </div>
)
}
export default LogoutMenu;

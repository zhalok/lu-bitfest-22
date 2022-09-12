import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css'
import LogoutMenu from "./LogoutMenu";

const hideMenu=()=>{document.querySelector("#lgm").style.display="none"}
const showMenu=()=>{document.querySelector("#lgm").style.display="block"}

const TitleBar=({page,style,up})=>{
    const[menuVis,setMenuVis]=useState(false);
    
    let addLis=()=>{document.addEventListener('click', function(event) {
        var isClickInsideElement1 = document.querySelector("#lgm").contains(event.target);
        var isClickInsideElement2=null;
        if(document.querySelector("#titlebarimg"))
            isClickInsideElement2 = document.querySelector("#titlebarimg").contains(event.target);
        if (!isClickInsideElement1 && !isClickInsideElement2) {
            setMenuVis(false);
        }
    });}

    addLis();

    useEffect(()=>{
        if(menuVis)
            {showMenu();}
        else
            {hideMenu();}
    },[menuVis])


    let titleImgClick=()=>{
    if(menuVis)
        {setMenuVis(false);}
    else
        {setMenuVis(true);}    
    }

    return(
        <div id="titlebar container">
        <div id="title_bar" style={style}>
            <div id="Logo">
                <div id="mms"><b>UTS</b></div>
            </div>
           { page==="landing"?(<div id="buttons">
                <Link to="/login" id="title_bar_login"><b>Log In</b></Link>
                <Link to="/signup1" id="title_bar_signup"><b>Sign Up</b></Link> 
            </div>):null}
            
           { page==="clientPage"?(<div id="titlebarclientcontainer">
            <div id="clienttabs" class="tabcontainer">
                <Link to="/studentprofile" class="tab">profile</Link>
                <Link to="/search" class="tab">Search for Bus</Link>
                
            </div>
            <img src="./pics_icons/profilepic.jpg" id="titlebarimg" onClick={titleImgClick}/>
            </div>):null}
            { page==="workerPage"?(<div id="titlebarclientcontainer">
            <div id="clienttabs" class="tabcontainer">
                <Link to="/studentprofile" class="tab">profile</Link>
                <Link to="/search" class="tab">Search for Bus</Link>
                <Link to="/businventory" class="tab">Bus list</Link>
                
                
            </div>
            <img src="./pics_icons/profilepic.jpg" id="titlebarimg" onClick={titleImgClick}/>
            </div>):null}
        </div>
        <LogoutMenu setMenuVis={setMenuVis}/>
        </div>
    )
}
export default TitleBar;

// <img src={up?up:localStorage.getItem("profile_pic")} id="titlebarimg" onClick={titleImgClick}/>
// <Link to="/search" class="tab">Search for Bus</Link>
//"./pics_icons/profilepic.jpg"

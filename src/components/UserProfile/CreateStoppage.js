import React, { Component, useEffect, useState } from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";

import "./style.css"
import UserNameModal from './Modals/UserNameModal'
import UserLocationModal from "./Modals/UserLocationModal";
import UserPhoneModal from "./Modals/UserPhoneModal";
import ProfilePicUploadModal from "./Modals/ProfilePicUploadModal"

import EducaionModal from "./Modals/EducationModal";

import axios from "axios";

 const CreateStoppage=()=>{
    const [profilepic,setProfilePic]=useState("./pics_icons/profilepic.jpg")
    const [name,setName]=useState("Tithi Saha")
    const [location,setLocation]=useState({"latitude":100,"longitude":100,"location":"Madina Market, Sylhet"})
    const [phoneno,setPhoneNo]=useState("01751327692")
    const [Educations,setEducations]=useState([{institute:"1234",
                    starting_year:"100",
                    ending_year:"100.65",
                    degree:"1",id:1
                    },
                    {institute:"3244",
                    starting_year:"234",
                    ending_year:"345.65",
                    degree:"2",id:1
                    },
                    {institute:"3413",
                    starting_year:"164",
                    ending_year:"232.65",
                    degree:"3",id:1
                    },
                    {institute:"3543",
                    starting_year:"209.6",
                    ending_year:"124.4",
                    degree:"4",id:2
                    }
                ]);
    const [Services,setServices]=useState([
        {"service_name":"Shopping","charge":"24 Tk/hr","id":1},
        {"service_name":"Teaching","charge":"200 Tk/hr","id":2},
        {"service_name":"cooking","charge":"200 Tk/hr","id":3}
    ])

    const [works,setWorks]=useState([
        {name:"Fuad",worker:"Tithi",rating:"2",review:"Had fun wok with blah blah... .... ...",service_name:"Shopping"},
        {name:"Fuad",worker:"Tithi",rating:"2",review:"Had fun wok with blah blah... .... ...",service_name:"Shopping"},
        {name:"Fuad",worker:"Tithi",rating:"2",review:"Had fun wok with blah blah... .... ...",service_name:"Shopping"},
        {name:"Fuad",worker:"Tithi",rating:"2",review:"Had fun wok with blah blah... .... ...",service_name:"Shopping"}
    ])
    const [type,setType]=useState(localStorage.getItem("type"))

    let showSetNameModal=()=>{document.querySelector("#setNameModal").style.display="block"}
    let showSetLocationModal=()=>{document.querySelector("#setLocationModal").style.display="block"}
    let showSetPhoneModal=()=>{document.querySelector("#setPhoneModal").style.display="block"}
    let showSetProfilePicModal=()=>{document.querySelector("#setProfilePicModal").style.display="block";}
    let showHireNowModal=()=>{document.querySelector("#hireNowModal").style.display="block";}
    let showEducaionModal=()=>{document.querySelector("#educationModal").style.display="block";}
    let showServiceModal=()=>{document.querySelector("#serviceModal").style.display="block";}

    useEffect(()=>{
        axios.get(`http://localhost:3001/${type}?email=${localStorage.getItem("email")}`).then(res=>{
            const data=res.data.user_data;
            setEducations(data.educations)
            setServices(data.services)
            setWorks(data.works)
            setName(data.basic_info.name)
            setLocation({"latitude":data.basic_info.latitude,"longitude":data.basic_info.longitude,"location":data.basic_info.location_name})
            setPhoneNo(data.basic_info.phone_no)
            if(data.basic_info.profile_pic)
                setProfilePic("http://localhost:3001/"+data.basic_info.profile_pic);
            else
                setProfilePic('./pics_icons/alter.png')
            console.log(data)
        })
    },[])
    
    return(
        <div id="container">
            <TitleBar page={type==="client"?"clientPage":"workerPage"} up={profilepic}/>
            <div id="profilediv">
                
                <div id="educationdiv" class="userinfo">
                    <div class="infotitle">
                    <img id="locaionicon" src="./pics_icons/location.png"/><b>Stoppages</b>
                        <img id="educationediticon" class="infoediticon pointer" src="./pics_icons/edit.png" onClick={showEducaionModal}/>
                    </div>
                    <div id="educationlist">
                        {Educations.map(Education=>(
                            <div class="educationlistitem">
                            <div id="educationinstitute">Route Name: {Education.institute}</div>
                            <div id="educationyear"><b>Label: {Education.degree}</b></div>
                            <div id="educationyear"> <b>Latitude: </b> {Education.starting_year} - <b>Longitude: </b>{Education.ending_year}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {type==="worker"?<div id="servicesdiv" class="userinfo">
                    <div class="infotitle">
                        Services <img id="serviceediticon" class="infoediticon pointer" src="./pics_icons/edit.png" onClick={showServiceModal}/>
                    </div>
                    <div id="profileservicelist">
                        {Services.map(Service=>(
                            <div class="profileservicelistitem">{Service.service_name}</div>
                        ))}
                    </div>
                </div>:null}
                
            </div>
            <Footer/>
            <UserNameModal name={name} setName={setName}/>
            <UserLocationModal setLocation={setLocation}/>
            <UserPhoneModal phoneNo={phoneno} setPhoneNo={setPhoneNo}/>
            <ProfilePicUploadModal profilePic={profilepic} setProfilePic={setProfilePic}/>
           
            <EducaionModal Educations={Educations} setEducations={setEducations}/>
            
        </div>
    )
 }
 export default CreateStoppage;

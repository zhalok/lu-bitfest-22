import React, { Component, useEffect, useState } from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";

import "./style.css"
import axios from "axios";

 const TransportDemand=()=>{
    /*const [licnse,setLicense]=useState("1234")
    const [codeName,setCodeName]=useState("A-001")
    const [location,setLocation]=useState({"latitude":100,"longitude":100,"location":"Madina Market, Sylhet"})
    const [capacity,setCapacity]=useState(" 50")
    
    
    const [drivers,setDrivers]=useState([{Full_Name:"Ali Mia",
                    Contact_Number:"01862383234",
                    },
                    {Full_Name:"Jakir Hasan",
                    Contact_Number:"01862383234",
                    },
                ]);*/

    const [demands, setDemands]=useState(
        [
            {
                route: "Amborkhana",
                timeSlot: "8 AM",
                role:{
                student: "30",
                Teacher: "10",
                Staff: "8",
                others:"Null"
                }
                
           
        },
        {
            route: "Sust gate",
            timeSlot: "10 AM",
            role:{
            student: "5",
            Teacher: "1",
            Staff: "2",
            others:"80"
            }
            
       
    },
    {
        route: "Bondor",
        timeSlot: "10 PM",
        role:{
        student: "20",
        Teacher: "5",
        Staff: "3",
        others:"Null"
        }
        
   
},
{
    route: "Mirabazar",
    timeSlot: "1 PM",
    role:{
    student: "25",
    Teacher: "8",
    Staff: "12",
    others:"Null"

    }
    

},
        ]
    );            
    const [type,setType]=useState(localStorage.getItem("type"))


     useEffect(()=>{
        axios.get(`http://localhost:3001/${type}?role=${localStorage.getItem("role")}`).then(res=>{
            const data=res.data.user_data;
            setDemands(data.demands)

            console.log(data)
        })
    },[])
    
    return(
        <div>
        <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="clientshiretxt">Transport Demands</div>
        
              
                        {demands.map(demand=>(
                            <div className="rectangleee" >
            
                            <div class="recttxt"><b>Route: </b> {demand.route} <br/>

                                <div class="recttxt"><b>Timeslot: </b>{demand.timeSlot}</div><br/><br/>
                                <div class="driverrtxt"><b>Transport Demand</b></div>
                                <input type="name" class="signupinput" id="name" placeholder="For Students"/>
                                <input type="name" class="signupinput" id="name" placeholder="For Teachers"/>
                                <input type="name" class="signupinput" id="name" placeholder="For Staffs"/>
                                <input type="name" class="signupinput" id="name" placeholder="For Others"/>
                            </div>
                            
                            
                        </div>
                        ))}
                    
                    <button class="endbutton">Save</button>
               
            </div>
            <Footer/>
          
        </div>
    )
 }
 export default TransportDemand;

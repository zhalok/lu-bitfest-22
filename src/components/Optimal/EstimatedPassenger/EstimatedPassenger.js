import React, { Component, useEffect, useState } from "react";
import Footer from "../../common/footer/Footer";
import TitleBar from "../../common/Title_bar";

import "./style.css"
import axios from "axios";

 const EstimatedPassenger=()=>{
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

    const [passengers, setPassengers]=useState(
        [
            {
                route: "Amborkhana",
                timeSlot: "8 AM",
                role:{
                student: "30",
                Teacher: "10",
                Staff: "8"
                }
                
           
        },
        {
            route: "Amborkhana",
            timeSlot: "8 AM",
            role:{
            student: "30",
            Teacher: "10",
            Staff: "8"
            }
            
       
    },
    {
        route: "Amborkhana",
        timeSlot: "8 AM",
        role:{
        student: "30",
        Teacher: "10",
        Staff: "8"
        }
        
   
},
{
    route: "Amborkhana",
    timeSlot: "8 AM",
    role:{
    student: "30",
    Teacher: "10",
    Staff: "8"
    }
    

},
        ]
    );            
    const [type,setType]=useState(localStorage.getItem("type"))


     useEffect(()=>{
        axios.get(`http://localhost:3001/${type}?role=${localStorage.getItem("role")}`).then(res=>{
            const data=res.data.user_data;
            setPassengers(data.passengers)

            console.log(data)
        })
    },[])
    
    return(
        <div>
        <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="clientshiretxt">Estimated Number of Passengers</div>
        
              
                        {passengers.map(passenger=>(
                            <div className="rectanglee" >
            
                            <div class="recttxt"><b>Location: </b> {passenger.route} <br/>

                                <div class="recttxt"><b>Timeslot: </b>{passenger.timeSlot}</div><br/><br/>
                                <div class="drivertxt"><b>Number of passengers</b></div>
                                <div class="recttxt"><b>Student: </b>{passenger.role.student}</div>
                                <div class="recttxt"><b>Teacher: </b>{passenger.role.Teacher}</div>
                                <div class="recttxt"><b>Staff: </b>{passenger.role.Staff}</div>
                            </div>
                            
                            
                        </div>
                        ))}
                    
                
               
            </div>
            <Footer/>
          
        </div>
    )
 }
 export default EstimatedPassenger;

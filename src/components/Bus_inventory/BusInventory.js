import React, { Component, useEffect, useState } from "react";
import Footer from "../common/footer/Footer";
import TitleBar from "../common/Title_bar";

import "./style.css"
import axios from "axios";

 const BusInventory=()=>{
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

    const [buses, setBuses]=useState(
        [
            {licnse: "1234",
             codeName: "A-001",
             capacity: "50",
             drivers: {Full_Name:"Ali Mia",
             Contact_Number:"01862383234"},
             active_status:"Running"
        },
        {licnse: "2345",
             codeName: "D-002",
             capacity: "45",
             drivers: {Full_Name:"Jakir Hasan",
             Contact_Number:"019763234"},
             active_status:"Maintenance"
        },
        {licnse: "8632",
             codeName: "H-016",
             capacity: "40",
             drivers: {Full_Name:"Golam Kibria",
             Contact_Number:"0172398298"},
             active_status:"OutOfService"
        },
        {licnse: "7334",
             codeName: "C-014",
             capacity: "30",
             drivers: {Full_Name:"Siddik Kabir",
             Contact_Number:"016239323"},
             active_status:"Running"
        }

        ]
    );            
    const [type,setType]=useState(localStorage.getItem("type"))


   /* useEffect(()=>{
        axios.get(`http://localhost:3001/${type}?codeName=${localStorage.getItem("codeName")}`).then(res=>{
            const data=res.data.user_data;
            setDrivers(data.drivers)
            setCodeName(data.codeName)
            setCapacity(data.capacity)
            setLicense(data.licnse)
            setLocation({"latitude":data.basic_info.latitude,"longitude":data.basic_info.longitude,"location":data.basic_info.location_name})

            console.log(data)
        })
    },[])*/
    
    return(
        <div>
        <TitleBar page="clientPage"/>
            <div id="hire">
                <div id="clientshiretxt">Bus Inventory</div>
        
              
                        {buses.map(bus=>(
                            <div className="rectanglee" >
            
                            <div class="recttxt"><b>Code Name: </b> {bus.codeName} <br/>
                            <div class="recttxt"><b>License Number: </b>{bus.licnse}</div><br/>
                                <div class="recttxt"><b>Capacity: </b>{bus.capacity}</div><br/><br/>
                                <div class="drivertxt"><b>Driver Info</b></div>
                                <div class="recttxt"><b>Full Name: </b>{bus.drivers.Full_Name}</div>
                                <div class="recttxt"><b>Contact No: </b>{bus.drivers.Contact_Number}</div>
                            </div>
                            {
                                (bus.active_status) === "Running" ? <button class="activebutton" onClick={false}>Active</button> : null
                                
                            }
                            {
                                (bus.active_status) === "Maintenance" ? <button class="maintenancebutton" onClick={false}>Maintenance</button> : null
                            }
                            {
                                (bus.active_status) === "OutOfService" ? <button class="outOfServicebutton" onClick={false}>Out Of Service</button> : null
                            }
                            
                        </div>
                        ))}
                    
                
               
            </div>
            <Footer/>
          
        </div>
    )
 }
 export default BusInventory;

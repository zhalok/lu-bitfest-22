import React from "react";
import axios from "axios";
import './style.css'

const BatchNumberModal=({batchNo,setBatchNo})=>{
    let hideSetBatchModal=()=>{
        document.querySelector("#setBatchModal").style.display="none";
    }
    let saveBatchNo=()=>{
        let newNo=document.querySelector("#ModalbatchField").value;
        if(newNo)
        {
            if(localStorage.getItem("type")==="student")
                axios.post("http://localhost:3001/updateworker",{
                    email:localStorage.getItem("email"),
                    batch_no:newNo
                }).then(res=>{
                    setBatchNo(newNo)
                })
            if(localStorage.getItem("type")==="client")
                axios.post("http://localhost:3001/updateclient",{
                    email:localStorage.getItem("email"),
                    phone_no:newNo
                }).then(res=>{
                    setBatchNo(newNo)
                })
        }
        hideSetBatchModal()
    }
    return(
    <div class="ModalBody" id="setPhoneModal">
    <div class="ModalContainer">
        <div class="ModalCloseContaier">
            <img class ="ModalCloseButton" src="./pics_icons/cancel.png" onClick={hideSetBatchModal}/>
        </div>
        <div style={{display:"flex", margin:"auto"}}>
        <input placeholder="Set new Batch no." id="ModalPhoneField"/>
        <div className="Button" id="UserPhonesavebutton" onClick={saveBatchNo}>Save</div>
        </div>
    </div>
    </div>
    )
}
export default BatchNumberModal;
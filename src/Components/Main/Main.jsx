import React, { useState } from 'react';
import dummy from "../dummy.js";
import Form from "./Form";
import './main.css'

function Main({index}) {

    const [form , setForm]  = useState('0');
    //Handling form
    const handleForm = (e) => {
        setForm(e);
        let element = document.getElementById('mainBody')
        element.style.backgroundImage= "linear-gradient(to left bottom, #969494, #a7a6a6, #b9b8b9, #cbcbcb, #dedede)";;
    }
    

    const handleCancel = (e) => {
        setForm(0);
        let element = document.getElementById('mainBody')
        element.style.backgroundImage=  "none";
    }
    return (
        <div className="mainContainer" >
        {
            dummy[index].Qualified.map((data) =>
                (
                    <div className="infoContainer">
                        {
                            data.LeadsPerMonth==='40' ?
                            <div className = "mostPopular">
                                Most Popular
                            </div>  :
                            <div className = "blank">
                            </div>
                        }
                        <div className="heading">
                            Qualified {data.LeadsPerMonth}
                        </div>
                        <div className="middleOne">
                            <p>${data.pricePerLiveTranfer}</p>
                            per Qualified lead
                        </div>
                        <div className="middleTwo">
                            Qualified leads per montha
                            <p>{data.LeadsPerMonth}</p>
                        </div>
                        <div className="middleTwo" id="noborder">
                            Platform fee per month
                            <p>${data.platformPrice}</p>
                        </div>
                        <div className="heading">
                             ${data.finalPackage}/mo
                        </div>
                        <div className="footerTwo" id =  {data.LeadsPerMonth==='40' ? "fill" : ""} onClick={()=> handleForm(data.LeadsPerMonth)}>
                            Start Your Trial
                        </div>
                        <div  >
                            {form===data.LeadsPerMonth && <Form value = {data.LeadsPerMonth} onClick = {handleCancel} />}
                        </div>
                    </div>
                )
            )
        }
            <div className="infoContainer">
            <div className = "blank">
                            </div>
                <div className="heading">
                    Enterprise
                </div>
                <div className="lastOneMiddle">
                    Want more than 80 Qualified leads each month?
                
                </div>
                <div className="footerTwo" onClick={()=> handleForm("80+")}>
                    Get in touch
                </div>
                <div  >
                    {form==="80+" && <Form value = {"80+"} onClick = {handleCancel} />}
                </div>
                
            </div>
        </div>
    );
}

export default Main;

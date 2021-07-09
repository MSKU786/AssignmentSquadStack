import React, { useEffect, useRef, useState } from 'react';

import "./form.css"
function Form(props) {
    //Used useRef for handling form data
    const name = useRef();
    const email = useRef();
    const mobile = useRef();
    const noLeads = useRef();
    const noLeadsCrm = useRef();
    const crm = useRef();
    const noOfAgents = useRef();
    const [sources, setSources] = useState([]);
    const [share, setShare] = useState([]);
    const formRef = useRef();
    
     //Handling outside click
     useEffect(() => {
        let handler = (event)=> {
            console.log(event.target);
            if(formRef.current && !formRef.current.contains(event.target)){
                handleCancel(0);
            }
  
        
        }
        document.addEventListener("mousedown",handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    },[formRef])


    //using function to handle the input data
    const handleSelect = (e) => {
        if(sources.includes(e))
        {
            let data = sources.filter(val => val!==e);
            setSources(data);
        }
        else
        {
            let data = sources;
            data.push(e);
            setSources(data);
        }
    }
    
    const handleShareClick = (e) => {
        if(share.includes(e))
        {
            let data = share.filter(val => val!==e);
            setShare(data);
        }
        else
        {
            let data = share;
            data.push(e);
            setShare(data);
        }
    }

    //Closing the form 
    const handleCancel = (e) => {
        props.onClick(e);
    }

    //Handling submission
    const handleClick = (e) => {
        e.preventDefault();
        const res = {
            name: name.current.value,
            email: email.current.value,
            mobileNo: mobile.current.value,
            noOfLeadsInMonth: noLeads.current.value,
            totalLeadsCRM: noLeadsCrm.current.value,
            crm: crm.current.value,
            noOfAgents: noOfAgents.current.value,
            leadSources: sources,
            aboutUs: share
        }
        console.log(res);
        alert(JSON.stringify(res));
        window.location.reload();
    }


    return (
        <div ref={formRef} className="formContainer">
            <form onSubmit={handleClick}>
                <div className="formHeader">
                    <h3> Get Stared with SquadVoice </h3>
                </div>
                <span onClick={()=>handleCancel(0)} id="cancelButton"> X </span>
                <b>Plan Selected </b><span> &nbsp; Qualified &nbsp; {props.value}</span> 
                <div className="nameSection">
                    <p>Name</p>
                    <input type="text" className="nameField" ref={name} required/>
                </div>
                <div className="emailorPhoneSection">
                    <div className="emailSection">
                        <p>
                            Email Address
                        </p>
                        <input type="email" className="emailField" ref={email} required/>
                    </div>
                    <div className="emailSection">
                        <p>
                            Phone No.
                        </p>
                        <input type="text" ref={mobile} className="phoneNumber" required/>
                    </div>
                </div>
                <div className="emailorPhoneSection">
                    <div className="emailSection">
                        <p>
                            Number of leads you generate in a month
                        </p>
                        <input type="number" id="quantity1" ref= {noLeads} name="quantity" min="0" max="100" step="10" placeholder="-" required/>
                    </div>
                    <div className="emailSection">
                        <p>
                            Total Leads in your CRM
                        </p>
                        <input type="number" id="quantity2" ref= {noLeadsCrm} name="quantity" min="0" max="100" step="10" placeholder="-" required/>
                    </div>
                </div>
                <div className="emailorPhoneSection">
                    <div className="emailSection">
                        <p>
                            Which CRM do you use?
                        </p>
                        <input type="number" id="quantity3" ref= {crm} name="quantity" min="0" max="100" step="10" placeholder="-" required/>
                    </div>
                    <div className="emailSection">
                        <p>
                            No of agents
                        </p>
                        <input type="number" id="quantity4" ref={noOfAgents} name="quantity" min="0" max="100" step="10" placeholder="-" required/>
                    </div>
                </div>
                 <div className="shareSection">
                    <p>
                        What are your biggest lead sources?
                    </p>
                    <input type="checkbox" name="Zollow" value="Zollow" onChange={(e)=>handleSelect(e.target.value)}/><span>Zollow</span>
                    <input type="checkbox" name="Realtor" value="Realtor" onChange={(e)=>handleSelect(e.target.value)}/><span>Realtor</span>
                    <input type="checkbox" name="Ylopo" value="Ylopo" onChange={(e)=>handleSelect(e.target.value)}/><span>Ylopo</span>
                    <input type="checkbox" name="Others" value="Others" onChange={(e)=>handleSelect(e.target.value)}/><span>Others</span>
                </div>
                
                <div className="shareSection">
                    <p>
                        How did you hear about us
                    </p>
                    <input type="checkbox" name="Google" value="Google" onChange={(e)=>handleShareClick(e.target.value)}/><span>Google</span>
                    <input type="checkbox" name="Facebook" value="Facebook" onChange={(e)=>handleShareClick(e.target.value)}/><span>Facebook</span>
                    <input type="checkbox" name="Email" value="Email" onChange={(e)=>handleShareClick(e.target.value)}/><span>Email</span>
                    <input type="checkbox" name="Friends" value="Friends" onChange={(e)=>handleShareClick(e.target.value)}/><span>Friends</span>
                    <input type="checkbox" name="Real Closers" value="Real Closers" onChange={(e)=>handleShareClick(e.target.value)}/><span>Real Closers</span>
                </div>
                <button type="submit" id="submitButton">Submit</button>
            </form>
        </div>
    );
}

export default Form;
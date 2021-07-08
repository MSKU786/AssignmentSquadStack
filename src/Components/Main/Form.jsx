import React from 'react';
import "./form.css"
function Form(props) {
    console.log("this is the ",props);
    const handleCancel = (e) => {
        props.onClick(e);
    }
    return (
        <div className="formContainer">
            <form onSubmit="handleClick">
                <h3> Get Stared with SquadVoice </h3>
                <span onClick={()=>handleCancel(0)}> X </span>
                <b>Plan Selected </b><span> &nbsp; {props.value}</span> 
                <div className="nameSection">
                    <p>Name</p>
                    <input type="text" className="nameField" />
                </div>
                <div className="emailorPhoneSection">
                    <div className="emailSection">
                        <p>
                            Email Address
                        </p>
                        <input type="email" className="emailField" />
                    </div>
                    <div className="phoneNoSection">
                        <p>
                            Phone No.
                        </p>
                        <input type="text" className="phoneNumber" />
                    </div>
                </div>
                <div className="otherInfo1">
                    <div className="leadGenerate">
                        <p>
                            Number of leads you generate in a month
                        </p>
                        <input type="number" id="quantity1" name="quantity" min="0" max="100" step="10" placeholder="-"/>
                    </div>
                    <div className="totalLeads">
                        <p>
                            Total Leads in your CRM
                        </p>
                        <input type="number" id="quantity2" name="quantity" min="0" max="100" step="10" placeholder="-"/>
                    </div>
                </div>
                <div className="otherInfo2">
                    <div className="leadGenerate">
                        <p>
                            Which CRM do you use?
                        </p>
                        <input type="number" id="quantity3" name="quantity" min="0" max="100" step="10" placeholder="-"/>
                    </div>
                    <div className="totalLeads">
                        <p>
                            No of agents
                        </p>
                        <input type="number" id="quantity4" name="quantity" min="0" max="100" step="10" placeholder="-"/>
                    </div>
                </div>
                <div className="leadSourceSection">
                    <p>
                        What are your biggest lead sources?
                    </p>
                    <input type="checkbox" name="Zollow" value="Zollow">Zollow</input>
                    <input type="checkbox" name="Realtor" value="Realtor">Realtor</input>
                    <input type="checkbox" name="Ylopo" value="Ylopo">Ylopo</input>
                    <input type="checkbox" name="Others" value="Others">Others</input>
                </div>
                <div className="shareSection">
                    <p>
                        How did you hear about us
                    </p>
                    <input type="checkbox" name="Google" value="Google">Google</input>
                    <input type="checkbox" name="Facebook" value="Facebook">Facebook</input>
                    <input type="checkbox" name="Email" value="Email">Email</input>
                    <input type="checkbox" name="Friends" value="Friends">Friends</input>
                    <input type="checkbox" name="Real Closers" value="Real Closers">Real Closers</input>
                </div>
            </form>
        </div>
    );
}

export default Form;
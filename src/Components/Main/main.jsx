import React from 'react';
import dummy from "../dummy.js"
import './main.css'

function Main({index}) {
    console.log(dummy[index]);
    return (
        <div className="mainContainer">
        {
            dummy[index].Qualified.map((data) =>
                (
                    <div className="infoContainer">
                        <div className="head">
                            Qualified {data.LeadsPerMonth}
                        </div>
                        <div className="middleOne">
                            ${data.leadPrice}
                            per Qualified lead
                        </div>
                        <div className="middleTwo">
                            Qualified leads per montha
                            {data.LeadsPerMonth}
                        </div>
                        <div className="middleThree">
                            Platform fee per month
                            ${data.platformPrice}
                        </div>
                        <div className="footerOne">
                             ${data.finalPackage}
                        </div>
                        <div className="footerTwo">
                            Start Your Trial
                        </div>
                    </div>
                )
            )
           
        }
        </div>
    );
}

export default Main;
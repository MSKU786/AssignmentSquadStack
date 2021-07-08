import React, { useEffect, useState } from 'react';
import Main from "../Main/Main"
import "./topbar.css"

function Topbar({defaultValue}) {
 
    const [range, setRange] = useState(defaultValue);

    useEffect(() => {
        setRange(JSON.parse(window.localStorage.getItem('range')));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('range', range);
      }, [range]);

    return (
        <>
        <div class = "header">
            <div className="block" onClick = {()=> setRange(1)}>
                <span>$100K-$200K</span>
            </div>
            <div className="block" onClick = {()=> setRange(2)}>
                <span>$200K-$300K</span>
            </div>
            <div className="block" onClick = {()=> setRange(3)}>
            <span>$300K-$400K</span>
            </div>
            <div className="block" onClick = {()=> setRange(4)}>
            <span>$400K-$500K</span>
            </div>
            <div className="block" onClick = {()=> setRange(5)}>
            <span>$500K-$600K</span>
            </div> 
               

            
        </div>
            <div>
            {range ===1 &&   <div> <Main index={0}/></div>}
            {range ===2 &&   <div> <Main index={1}/></div>}
            {range ===3 &&   <div> <Main index={2}/></div>}
            {range ===4 &&   <div> <Main index={3}/></div>}
            {range ===5 &&   <div> <Main index={4}/></div>}
        </div>
        </>
    );
}

export default Topbar;
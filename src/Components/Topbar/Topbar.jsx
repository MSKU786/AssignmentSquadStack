import React, { useEffect, useState } from 'react';
import Main from "../Main/Main"
import "./topbar.css"

function Topbar({defaultValue}) {
 
    const [range, setRange] = useState(defaultValue);

    useEffect(() => {
        if(JSON.parse(window.localStorage.getItem('range')))
            setRange(JSON.parse(window.localStorage.getItem('range')));
        else
            setRange(3);
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('range', range);
      }, [range]);

    return (
        <>
        <div class = "header">
            <div className={ range===1 ? "block active ":"block"} id="firstOne" onClick = {()=> setRange(1)}>
                <span>$100K-$200K</span>
            </div>
            <div className={ range===2 ? "block active ":"block"} onClick = {()=> setRange(2)}>
                <span>$200K-$300K</span>
            </div>
            <div className={ range===3 ? "block active ":"block"} onClick = {()=> setRange(3)}>
            <span>$300K-$400K</span>
            </div>
            <div className={ range===4 ? "block active ":"block"} onClick = {()=> setRange(4)}>
            <span>$400K-$500K</span>
            </div>
            <div className={ range===5 ? "block active ":"block"} id= "lastOne" onClick = {()=> setRange(5)}>
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

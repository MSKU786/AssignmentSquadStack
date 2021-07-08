import React, { useEffect, useState } from 'react';
import Main from "../Main/Main"

function Topbar({defaultValue}) {
 
    const [range, setRange] = useState(defaultValue);

    useEffect(() => {
        setRange(JSON.parse(window.localStorage.getItem('range')));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('range', range);
      }, [range]);

    return (
        <div>
            <div className="first" onClick = {()=> setRange(1)}>
                <span>$100K-$200K</span>
            </div>
            <div className="second" onClick = {()=> setRange(2)}>
                <span>$200K-$300K</span>
            </div>
            <div className="third" onClick = {()=> setRange(3)}>
            <span>$300K-$400K</span>
            {
                    range === 3 && 
                    <div>
                        <h2>Third</h2>
                        <Main index={2}/>
                    </div>
            }

            </div>
            <div className="fourth" onClick = {()=> setRange(4)}>
            <span>$400K-$500K</span>
            {
                    range === 4 && 
                    <div>
                        <h2>Fourth</h2>
                        <Main index={3}/>
                    </div>
            }

            </div>
            <div className="fifth" onClick = {()=> setRange(5)}>
            <span>$500K-$600K</span>
            {
                    range === 5 && 
                    <div>
                        <h2>five</h2>
                        <Main index={4}/>
                    </div>
            }
            </div>
            
                <div>
                    {range ===1 &&   <div> <Main index={0}/></div>}
                    {range ===2 &&   <div> <Main index={1}/></div>}
                    {range ===3 &&   <div> <Main index={2}/></div>}
                    {range ===4 &&   <div> <Main index={3}/></div>}
                    {range ===5 &&   <div> <Main index={4}/></div>}
                </div>

            
        </div>
    );
}

export default Topbar;
import React, { useState } from 'react';


function topbar(props) {
    const [range, setRange] = useState(2);
    return (
        <div>
            <div className="first" onClick = {()=> setRange(0)}>
            <span>$100K-$200K</span>
            {
                range ==0 && 
                <div>
                    <h2>first</h2>
                </div>
            }
            </div>
            <div className="second" onClick = {()=> setRange(1)}>
            <span>$200K-$300K</span>
            {
                    range == 1 && 
                    <div>
                        <h2>Second</h2>
                    </div>
            }
            </div>
            <div className="third" onClick = {()=> setRange(2)}>
            <span>$300K-$400K</span>
            {
                    range == 2 && 
                    <div>
                        <h2>Third</h2>
                    </div>
            }

            </div>
            <div className="fourth" onClick = {()=> setRange(3)}>
            <span>$400K-$500K</span>
            {
                    range == 3 && 
                    <div>
                        <h2>Fourth</h2>
                    </div>
            }

            </div>
            <div className="fifth" onClick = {()=> setRange(4)}>
            <span>$500K-$600K</span>
            {
                    range == 4 && 
                    <div>
                        <h2>five</h2>
                    </div>
            }
            </div>
        </div>
    );
}

export default topbar;
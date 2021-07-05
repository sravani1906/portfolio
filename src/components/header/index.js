import React, { useState } from 'react';
import "./header.css";
import Web from './web';
import Mobile from './mobile';


function Header(){
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className="header">
            <div className='logo'>Hello World!</div>

            <div className='menu'>
                <div className="webMenu">
                    <Web/>
                </div>
                <div className="mobMenu">
                    <div onClick={()=>setIsMobile(!isMobile)}>
                        <i className=".mob-icon fi-rr-apps"></i>
                    </div>
                    {isMobile? <Mobile isMobile={isMobile} setIsMobile = {setIsMobile}/> : null }           
                </div>
            </div>
        </div>
    );
}

export default Header;
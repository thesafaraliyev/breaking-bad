import React from "react";

import logo from '../../img/logo.png';


const Header = () => {
    return (
        <div className='center'>
            <img src={logo} alt="Say my name!" style={{padding: '60px'}}/>
        </div>
    )
}


export default Header;
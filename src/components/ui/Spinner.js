import React from "react";

import SpinnerGig from '../../img/spinner.gif';


const Spinner = () => {
    return (
        <img
            src={SpinnerGig}
            alt="Loading.."
            style={{width: '56px', display: 'block', margin: 'auto'}}
        />
    )
}


export default Spinner;
import React from "react";

function Header(){
    return(
        <div className="header">
            <img className="logo" src="./logo.png" alt="logo"/>
            <p className="header--head">Login to your Account</p>
            <p className="header--tagLine">See what is going on with your business</p>
        </div>
    )
}

export default Header;
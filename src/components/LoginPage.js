import React from "react";
import Header from "./Header";

function LoginPage(){

    const [formData,setFormData]=React.useState(
        {email:"",password:""}
    )

    console.log(formData)
    function handleChange(event){
        setFormData(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    return(
        <div className="container">
            <Header />
            <br />
            <button className="google">
                <img 
                    src="./googleLogo.png" 
                    className="google--logo" 
                    alt="google"
                />
                <span 
                    className="google--sp">
                        Continue with google
                </span>
            </button>
            
            <p className="login--or">------------- or Sign in with Email ------------- </p>
            
            <form className="form">

                <div>
                    <label 
                        className="label--email"
                        >
                            Email:
                    </label>
                    <br />
                    <input 
                        type="email" 
                        placeholder="mail@abc.com" 
                        id="email"
                        onChange={handleChange}
                        name="email"
                    />
                </div>

                <div>
                    <label
                        className="label--password">
                            Password:
                    </label>
                    <br />

                    <input 
                        type="password" 
                        id="password"
                        onChange={handleChange}
                        name="password"
                    />
                    <br/>

                    <input 
                        type="checkbox" 
                        id="isRemeber"
                    />
                    <label 
                        htmlFor="isRemeber" 
                        className="label--remeber">
                            Remeber Me
                    </label>
                    <a href="" className="forgot">forgot?</a>
                </div>

                <br />
                <button 
                    className="form--login">
                        <p className="login-word">Login</p>
                </button>
            </form>
        </div>
    )
}

export default LoginPage;
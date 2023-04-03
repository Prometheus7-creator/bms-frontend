import { React, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Signup from '../components/Signup';

const Authenticate = () =>{

    const [currPage, setCurrPage] = useState("Log In");

    const page ={
        "Log In": <Login/>,
        "Sign Up": <Signup/>
    }

    const handleClick = (event) =>{
        setCurrPage(event.target.name);
    }
    
    return (
      
        <>
        <Navbar/>
        {page[currPage]}

        <div className='redirect-btn'>

        {Object.keys(page).map((key)=>(currPage!==key)?
                <button
                    type="button" 
                    name={key} 
                    className="btn submit-btn"
                    onClick={handleClick}
                >{key}</button>: null)}
        </div>
        <Footer/>
        </>
        
    );
}
export default Authenticate;
import { React, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreateAccount = () =>{

    const [formData, setFormData] = useState({

        "fullName": "",
        "phoneNumber": "",
        "emailAddress": "",
        "dob": "",
        "accountType": "Select"
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        setFormData(prev=>({
            ...prev,
        }))

        console.log(formData);

        // fetch(`${base_url}/insertNeftTransactions`, {method: "POST",
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(formData)})
        // .then(res => res.json())
        // .then(res => console.log(res));

    }
    
    return (
      
        <>
        <Navbar/>
        <div className='money-transfer'>
            <h1>Create Account</h1>
            <br></br>
            <form onSubmit={handleSubmit}>

            <div className="input-wrapper">
            <input type="text" id="fullName" name="fullName" value={formData['fullName']} required onChange={handleChange}/>
            <label htmlFor="fullName">Full Name</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="phoneNumber" name="phoneNumber" value={formData['phoneNumber']} required onChange={handleChange}/>
            <label htmlFor="phoneNumber">Phone Number</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="emailAddress" name="emailAddress" value={formData['emailAddress']} required onChange={handleChange}/>
            <label htmlFor="emailAddress">Email Address</label>
            </div>

            <div className="input-wrapper">
            <input type="date" id="dob" name="dob" value={formData['dob']} required onChange={handleChange}/>
            <label htmlFor="dob">Date Of Birth(mm/dd/yyyy)</label>
            </div>

            <div className="input-wrapper">
            <select id="accountType" name="accountType" value={formData['accountType']} required onChange={handleChange}>
                <option>Select</option>
                <option>Savings</option>
                <option>Current</option>
            </select>
            <label htmlFor="accountType">Select Account Type</label>
            </div>
            
            <br></br>
            <div className='buttons'>
                <button className='cancel-btn'>Cancel</button>
                <button type="submit" className='submit-btn'>Submit</button>
            </div>
            </form>
        </div>
        <Footer/>
        </>
        
    );
}
export default CreateAccount;
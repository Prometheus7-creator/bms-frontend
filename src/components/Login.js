import React, {useState} from "react";

const Login = () => {
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
        <div className='money-transfer'>
        <h1>Log In</h1>
        <br></br>
        <form onSubmit={handleSubmit}>

        <div className="input-wrapper">
        <input type="text" id="emailAddress" name="emailAddress" value={formData['emailAddress']} required onChange={handleChange}/>
        <label htmlFor="emailAddress">Email Address</label>
        </div>

        <div className="input-wrapper">
        <input type="password" id="password" name="password" value={formData['password']} required onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        </div>
        
        <br></br>
        <div className='buttons'>
            <button className='cancel-btn'>Cancel</button>
            <button type="submit" className='submit-btn'>Submit</button>
        </div>
        </form>
    </div>
    );
}
export default Login;
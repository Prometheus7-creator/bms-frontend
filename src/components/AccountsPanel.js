import { NavLink } from "react-router-dom";
import { UserContext } from '../App';
import { useState, useEffect, useContext } from "react";

const AccountsPanel = () =>{

    const [accounts, setAccounts] = useState([]);
    const {user, setUser} = useContext(UserContext);
    let id = 1;
    useEffect(()=>{
        if ('customerId' in user)
            id = user.customerId;
        else if ('employeeId' in user)
            id = user.employeeId;
        fetch(`${process.env.REACT_APP_ACCOUNT_URL}/getAllAccountsByUserId/${id}`)
        .then(res => res.json())
        .then(res => {setAccounts(res);});
    }, []);

    return(
        <div className="container accounts-panel">
            <h2 className="aheading">Choose an account</h2>
                <div className="container accbuttons">
                <div class="row p-4 accrow">
                    <div class="col col-md-6 col-12 acccol">
                        <NavLink to="/accountview" state="savings"><button className="btn btn-light btn-large accbutton">Savings Account</button></NavLink>
                    </div>
                    <div class="col col-md-6 col-12 acccol">
                    <NavLink to="/accountview" state="current"><button className="btn btn-light btn-large accbutton">Current Account</button></NavLink>
                    </div>
                </div>
                <div class="row p-4 accrow">
                    <div class="col col-12 acccol">
                        <button className="btn btn-light btn-large accbutton">Loan Account</button>
                    </div>
                    {/* <div class="col">
                    <button className="btn btn-primary btn-large accbutton">Current Account</button>
                    </div> */}
                </div>
                    
                </div>
                
          
        </div>
    );
}

export default AccountsPanel;
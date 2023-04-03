import { React, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../App';

function AccountView(){

    const [account, setAccount] = useState({});
    const { state } = useLocation();

    const { user, setUser } = useContext(UserContext);
    let id = 1;

    useEffect(()=>{
        if ('customerId' in user)
            id = user.customerId;
        else if ('employeeId' in user)
            id = user.employeeId;

        fetch(`${process.env.REACT_APP_ACCOUNT_URL}/getAllAccountsByUserId/${id}`)
        .then(res => res.json())
        .then(res => {
            let bankAccount = res.filter(account => account.accountType === state);
            bankAccount = bankAccount.length>0? bankAccount[0]: null;
            setAccount(bankAccount);
        })
    }, [])


    return (
    
  <div className='accountView'>
    {account?<>
        {Object.keys(account).map(key => <h1>{key} : {account[key]} </h1>)}
      <button className='pin-btn'>Change Pin</button></>
    : <h2>Account not found</h2>}
    </div>
    );
   }
export default AccountView;
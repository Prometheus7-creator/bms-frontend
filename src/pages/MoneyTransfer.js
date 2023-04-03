import { React, useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MoneyTransfer = () =>{

    const { user, setUser } = useContext(UserContext);
    const [formData, setFormData] = useState({

        "senderAccountNo": "Select",
        "receiverBankName": "Select",
        "receiverAccountNo": "",
        "amount": "",
        "transactionType": "Select"
    });

    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    let id = 1;

    const banks = [
        {"BankId": "1", "Name": "SBI", "Address": "Delhi", "IfscCode": "11", "BranceName": "Delhi"},
        {"BankId": "2", "Name": "AXIS", "Address": "Lucknow", "IfscCode": "12", "BranceName": "Lucknow"},
        {"BankId": "3", "Name": "HDFC", "Address": "Mumbai", "IfscCode": "13", "BranceName": "Mumbai"},
        {"BankId": "4", "Name": "PNB", "Address": "Dehradun", "IfscCode": "14", "BranceName": "Dehradun"},
        {"BankId": "5", "Name": "ICICI", "Address": "Bengaluru", "IfscCode": "15", "BranceName": "Bengaluru"}
    ];

    // const accounts = [
    //     {"AccountNumber": "111", "AccountType": "Savings", "Balance": "15", "RegisteredDate": "24/03/2023", "UserID": "201"},
    //     {"AccountNumber": "112", "AccountType": "Current", "Balance": "20", "RegisteredDate": "24/03/2023", "UserID": "202"},
    // ];

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const getBankObj = (bankName) => banks.filter(bank => bank.Name === bankName);

    const cancel = () => {
        navigate('/dashboard')
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        let bank = getBankObj(formData['receiverBankName']);
        let bankId;
        if (bank.length>0){
            bankId = bank[0].BankId;
        }
        // let senderAccount;

        // await fetch(`${process.env.REACT_APP_ACCOUNT_URL}/getAccount/${formData['senderAccountNo']}`)
        // .then(res => res.json())
        // .then(res => {
        //     senderAccount = res;
        // })
        let receiverAccount;

        await fetch(`${process.env.REACT_APP_ACCOUNT_URL}/getAccount/${formData['receiverAccountNo']}`)
        .then(res => res.json())
        .then(res => {
            receiverAccount = res;
        })

        setFormData(prev=>({
            ...prev,
            'bankId': bankId,
            'senderUserId': user.userId,
            'receiverUserId': receiverAccount.receiverUserId
        }))

        console.log(formData);

        await fetch(`${process.env.REACT_APP_TRANSACTION_URL}/insert${formData['transactionType']}Transactions`, {method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)})
        .then(res => res.json())
        .then(res => {alert(res['message']); window.location.reload()})
        .catch(err => console.log(err));

    }

    useEffect(()=>{
        if ('customerId' in user)
            id = user.customerId;
        else if ('employeeId' in user)
            id = user.employeeId;

        fetch(`${process.env.REACT_APP_ACCOUNT_URL}/getAllAccountsByUserId/${id}`)
        .then(res => res.json())
        .then(res => setAccounts(res));
    }, [])
    return (
        <>
        <Navbar/>
        <div className='money-transfer'>
            <h1>Money Transfer</h1>
            <br></br>
            <form onSubmit={handleSubmit}>

            <div className="input-wrapper">
            <select id="transactionType" name="transactionType" value={formData['transactionType']} required onChange={handleChange}>
                <option>Select</option>
                <option>Neft</option>
                <option>Rtgs</option>
            </select>
            <label htmlFor="transactionType">Select Transaction Type</label>
            </div>
            
            <div className="input-wrapper">
            <select id="senderAccountNo" name="senderAccountNo" value={formData['senderAccountNo']} required onChange={handleChange}>
                <option>Select</option>
                {accounts.map((account, i) => <option key={i}>
                    {account.accountNumber}
                </option>)}
            </select>
            <label htmlFor="senderAccountNo">From Account</label>
            </div>

            <div className="input-wrapper">
            <select id="receiverBankName" name="receiverBankName" value={formData['receiverBankName']} required onChange={handleChange}>
            <option>Select</option>
                {banks.map((bank, i)=> <option key={i}>{bank.Name}</option>)}

            </select>
            <label htmlFor="receiverBankName">Select Receiver's Bank</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="receiverAccountNo" name="receiverAccountNo" value={formData['receiverAccountNo']} required onChange={handleChange}/>
            <label htmlFor="receiverAccountNo">To Account</label>
            </div>

            <div className="input-wrapper">
            <input type="text" id="amount" name="amount" value={formData['amount']} required onChange={handleChange}/>
            <label htmlFor="amount">Amount</label>
            </div>
            <br></br>
            <div className='buttons'>
                <button className='cancel-btn' onClick={cancel}>Cancel</button>
                <button type="submit" className='submit-btn'>Submit</button>
            </div>
            </form>
        </div>
        <Footer/>
        </>
    );
}

export default MoneyTransfer;
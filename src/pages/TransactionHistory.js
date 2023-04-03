import Transaction from "../components/Transaction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

const TransactionHistory = ({userId}) =>{
    const [neftTransactions, setNeftTransactions] = useState([
        // {receiverAccountNo: "123", amount: "1250", timestamp: "20"},
        // {receiverAccountNo: "123", amount: "2500", timestamp: "25"},
        // {receiverAccountNo: "456", amount: "5000", timestamp: "30"},
        // {receiverAccountNo: "567", amount: "1100", timestamp: "19"},
        // {receiverAccountNo: "900", amount: "1000", timestamp: "21"},
    ]);

    const [rtgsTransactions, setRtgsTransactions] = useState([]);

    const { user, setUser } = useContext(UserContext);
    let id = 1;

    useEffect(()=>{
        if ('customerId' in user)
            id = user.customerId;
        else if ('employeeId' in user)
            id = user.employeeId;

        fetch(`${process.env.REACT_APP_TRANSACTION_URL}/getAllNeftTransactions/${id}`)
        .then(res => res.json())
        .then(res => (setNeftTransactions(res)));

        fetch(`${process.env.REACT_APP_TRANSACTION_URL}/getAllRtgsTransactions/${id}`)
        .then(res => res.json())
        .then(res => (setRtgsTransactions(res)));
    },[])

    return (
      <div className="ttansaction-hiistory">
    
        <Navbar/>
        <br></br>
        <br></br>
        <div className="container transaction-panel">
            <div className="col col-12 maincol">
                <h3 className="theading">Previous Transactions</h3>

                {neftTransactions.sort((x,y)=> y.timestamp - x.timestamp).map(transaction => <div className="row transaction ">
                    <Transaction account={transaction.receiverAccountNo} amount={transaction.amount} timestamp={transaction.timestamp}/>      
                </div>)}

                {rtgsTransactions.sort((x,y)=> y.timestamp - x.timestamp).map(transaction => <div className="row transaction ">
                    <Transaction account={transaction.receiverAccountNo} amount={transaction.amount} timestamp={transaction.timestamp}/>      
                </div>)}
                
            </div>
        </div>
        <br></br><br></br>
        <Footer/>
        </div>
    );
}

export default TransactionHistory;
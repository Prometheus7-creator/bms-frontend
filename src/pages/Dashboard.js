import { React } from 'react';
import LastTransactionPanel from '../components/LastTransactionPanel';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Panel from '../components/Panel';
import Services from '../components/Services';
import Footer from '../components/Footer';



const Dashboard = () =>{
    
    return (
        <div className='home'>
        <Navbar userName={'Testuser'}/>
        <br></br>
        <br></br>
        <Panel/>
        <br></br>
        <br></br>
        <Services/>
        <br></br>
        <br></br>
        <Footer/>
        </div>
    );
}

export default Dashboard;
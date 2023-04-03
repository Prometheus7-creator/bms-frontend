import {RiAccountCircleLine} from 'react-icons/ri';
import {BsCashCoin} from 'react-icons/bs';
import {FaRegListAlt} from 'react-icons/fa';
import {MdOutlineNoAccounts} from 'react-icons/md';
import {TbPigMoney} from 'react-icons/tb';
import {TbCalendarTime} from 'react-icons/tb'
import {FiArrowRightCircle} from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
const Services = () =>{

    return(
        <IconContext.Provider value={{color:'#146C94',size:'2rem'}}>
        <div className='container-fluid service-container'>
            <h1 className='dasheading px-5' style={{textAlign:'center',paddingTop:'1.2cm'}}>How can we help you today?</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5 services">
            
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      
      <div class="card-body">
      <RiAccountCircleLine/>
        <h5 class="card-title">Create Account</h5>
        <div className='nextarrow' style={{paddingLeft:'3.5cm'}}><NavLink to="/createaccount"><FiArrowRightCircle/></NavLink></div>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <FaRegListAlt/>
        <h5 class="card-title">Transaction History</h5>
        <div className='nextarrow' style={{paddingLeft:'2.5cm'}}><NavLink to="/transactionhistory"><FiArrowRightCircle/></NavLink></div>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <TbCalendarTime/>
        <h5 class="card-title">Monthly Payment Details</h5>
        <div className='nextarrow'style={{paddingLeft:'1.3cm'}}><NavLink><FiArrowRightCircle/></NavLink></div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
      <BsCashCoin/>
        <h5 class="card-title">Money Transfer</h5>
        <div className='nextarrow'style={{paddingLeft:'3.35cm'}}><NavLink to="/moneytransfer"><FiArrowRightCircle/></NavLink></div>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      
      <div class="card-body">
        <TbPigMoney/>
        <h5 class="card-title">Buy Service</h5>
        <div className='nextarrow' style={{paddingLeft:'4.3cm'}}><NavLink to="/servicepage"><FiArrowRightCircle/></NavLink></div>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     
      <div class="card-body">
        <MdOutlineNoAccounts/>
        <h5 class="card-title">Disable Net Banking</h5> 
        <div className='nextarrow' style={{paddingLeft:'2.5cm'}}><NavLink><FiArrowRightCircle/></NavLink></div>
        
       
      </div>
    </div>
  </div>
</div>
</div>
</IconContext.Provider>  
    );
}

export default Services;
import { React, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ServicesPage = () =>{
    
    return (
      
      <div className="services">
        <Navbar/>
        <br></br>
        <br></br>
        <h1 className="headline"> Service Insurance </h1>
        <br></br>
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src={require('../images/life.avif')} class="card-img-top" alt="..."/>
      <div class="card-body serv">
        <h5 class="card-title">Life Insurance</h5>
        <p class="card-text">Buying life insurance protects your spouse and children from the potentially devastating financial losses that could result if something happened to you.
         It provides financial security, helps to pay living expenses, and helps to pay any medical expenses.</p>
         <ul>
          <li> Total Amount : 72,000 &#8377;</li>
          <li> Number of Years : 5 </li>
          <li> Monthly Amount : 1,200 &#8377;</li>
         </ul>
         <div className="btn">
         <button className='btn  knowmorebtn' >Buy</button>
         </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={require('../images/car.avif')} class="card-img-top" alt="..."/>
      <div class="card-body serv">
        <h5 class="card-title">Vehicle Insurance</h5>
        <p class="card-text">Vehicle insurance would typically cover both the property risk (theft or damage to the vehicle) and the liability risk (legal claims arising from an accident).
         Vehicle insurance is insurance purchased for cars, trucks, motorcycles, and other road vehicles.</p>
         <ul>
          <li> Total Amount : 1,20,000 &#8377;</li>
          <li> Number of Years : 5 </li>
          <li> Monthly Amount : 2,000 &#8377;</li>
         </ul>
         <div className="btn">
          <button className='btn  knowmorebtn'>Buy</button> 
         </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={require('../images/health.avif')} class="card-img-top" alt="..."/>
      <div class="card-body serv">
        <h5 class="card-title">Health Insurance</h5>
        <p class="card-text">Health insurance is important because cost towards good medical facilities and hospitalisation can be financially stressful.
         With rising medical expenses, a health insurance cover can provide the added protection you need. You can also avail of financial coverage for expenses.</p>
         <ul>
          <li> Total Amount : 75,000 &#8377;</li>
          <li> Number of Years : 5 </li>
          <li> Monthly Amount : 1,250 &#8377;</li>
         </ul>
         <div className="btn">
         <button className='btn  knowmorebtn'>Buy</button> 
         </div>
      </div>
    </div>
  </div>
 
</div>
<br>
</br>
<br></br>
<br></br>
<Footer/>
      </div>
        
    );
}
export default ServicesPage;
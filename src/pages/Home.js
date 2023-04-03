import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard,Scrollbar,Pagination, Navigation } from "swiper";

import {GiTeamIdea} from 'react-icons/gi';
import {MdCorporateFare} from 'react-icons/md';
import {GoCreditCard} from 'react-icons/go';
import {BsFillRocketTakeoffFill} from 'react-icons/bs';
import {TbCircles} from 'react-icons/tb';
import {AiFillPicture} from 'react-icons/ai';
import {MdDiversity1} from 'react-icons/md';
import {SiHandshake} from 'react-icons/si';
import { IconContext } from 'react-icons';

import Footer from '../components/Footer';

const Home = () =>{

    return (
        <div className='home'>
         <Navbar/>
            <div id="header" className='headersection'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-12 mx-auto'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 leftheader'>
                                <h1 className='firstheading p-5'>CHASE YOUR DREAMS WITH US</h1>
                                <h5 className='secheading '>
                                    We exist to assist you managing your financial plannings and
                                    celebrate your financial achievements
                                </h5>
                                <div className='mt-3'>
                                    <NavLink to="" className='btn btn-color btn-bg-color  createacc'>
                                        Create Account
                                    </NavLink>
                                    <NavLink to="" className='btn btn-color btn-bg-color login'>
                                        Login
                                    </NavLink>
                                </div>
                            
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require('../images/corporatespace1.jpg')} className='c-photo' alt=""/>
   
      <div class="carousel-caption c-text">
        <h5 className='c-heading'>Aim Big</h5>
        <p>Aim bigger and reach higher with Wissen Bank services</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/homepic3.jpg')} className='c-photo' alt=""/>
      <div class="carousel-caption  c-text">
        <h5 className='c-heading'>Easy Online Banking</h5>
        <p>Hasslefree money transfer from a click of a button</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src={require('../images/piggybank.jpg')} className='c-photo' alt=""/>
      <div class="carousel-caption  c-text">
        <h5 className='c-heading'>Big Savings</h5>
        <p>With Wissen Bank you can save large and easily</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                            </div>
                            <br></br>
                            <br></br>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
            {/* jumbotron */}
            <div className="jumbotron jumbotron-fluid happyBankingtext">
              <div class="container textcontainer">
                <h1 class=" pb-5 heading">Happy Banking With Us</h1>
                <p class="lead">We at Wissen Bank aim to provide you easy and flexible solutions,so that you can touch the height of your goals and still climb higher.</p>
              </div>
            </div>
            <br></br><br></br><br></br>
            {/* value section */}
            <IconContext.Provider value={{color:'#146C94',size:'2rem'}}>
            <div class="container value-grid">
                <div class="row gridrow">
                    <div class="col p-3 value1">
                        <TbCircles/>
                        <h4>Integrity</h4>
                        <p>Displaying the highest level of integrity in the way we conduct our business</p>
                    </div>
                    <div class="col p-3 value1">
                        <AiFillPicture/>
                        <h4>Demonstrate</h4>
                        <p>Demonstrating a strong will to win in the market place</p>
                    </div>
                    <div class="col p-3 value1">
                        <MdDiversity1/>
                        <h4>Diversity</h4>
                        <p>Promoting diversity in the work place and community</p>
                    </div>
                    <div class="col p-3 value1">
                        <GiTeamIdea/>
                        <h4>Teamwork</h4>
                        <p>Our work culture promotes and values teamwork the most</p>
                    </div>
                 </div>
                 <div class="row gridrow">
                    <div class="col p-3 value1">
                        <SiHandshake/>
                        <h4>Collaboration</h4>
                        <p>Displaying the highest level of integrity in the way we conduct our business</p>
                    </div>
                    <div class="col p-3 value1">
                        <BsFillRocketTakeoffFill/>
                        <h4>Technology</h4>
                        <p>Harnessing the power of technology to deliver better customer experience</p>
                    </div>
                    <div class="col p-3 value1">
                        <MdCorporateFare/>
                        <h4>Corporate</h4>
                        <p>Setting the standard for the best corporate citizenship in the communities we work</p>
                    </div>
                    <div class="col p-3 value1">
                        <GoCreditCard/>
                        <h4>Digital</h4>
                        <p>Best digital platform for online banking</p>
                    </div>
                 </div>
            </div>
            </IconContext.Provider>
            <br></br><br></br><br></br>
            {/* testimonials */} 
          <div className='container-fluid pb-5 swiper-container-testimonial'>
            <h2 className='h2testimonial'>Testimonials</h2>
         
            <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={0}
        grabCursor={true}
        spaceBetween={3}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        loop={true}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slider'>
            <section className='container logosection'>
                    <div className='image'>
                    <img src={require('../images/t15.avif')} alt=""/>
                    </div>   
            </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container logosection'>
                    <div className='image'>
                    <img src={require('../images/t1.avif')} alt=""/>
                    </div> 
        </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container logosection'>                
                    <div className='image'>
                    <img src={require('../images/t4.jpg')} alt=""/>
                    </div>                    
            </section>
        </SwiperSlide>
        <SwiperSlide className='slider'>
        <section className='container logosection'>                
                    <div className='image'>
                    <img src={require('../images/t5.avif')} alt=""/>
                    </div>               
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>               
                    <div className='image'>
                    <img src={require('../images/t7.avif')} alt=""/>
                    </div>                     
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'>
                    <img src={require('../images/t8.avif')} alt=""/>
                    </div> 
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'>
                    <img src={require('../images/t9.jpg')} alt=""/>
                    </div> 
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'>
                    <img src={require('../images/t14.avif')} alt=""/>
                    </div> 
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'><img src={require('../images/t10.avif')} alt=""/>                    
                    </div> 
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'><img src={require('../images/t11.avif')} alt=""/>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'><img src={require('../images/t13.jpg')} alt=""/>
                    </div> 
            </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='container logosection'>
                    <div className='image'><img src={require('../images/t12.jpg')} alt=""/>  
                    </div> 
            </section>
        </SwiperSlide>
        
      </Swiper>
    </div>
            
            <br></br><br></br><br></br>
            {/* About us route */}
            <div className='container-fluid aboutushome'>
                <div className='col col-10 mx-auto'>
                <div className='row'>
                    <div className='col col-md-6 order-1 moneytreecol'>
                    <div className='bluepatch2'>

                    </div> 
                    <img src={require('../images/moneytree.jpg')} className='img-fluid home-moneytree' alt="header img" />
                    
                    </div>
                    <div className='col col-md-6 order-1 glancerightcol'>
                        <h2 className='glanceheading'>Wissen Bank at a Glance</h2>
                        <p >Wissen Bank is one of India’s leading private banks and was among the first to receive approval from the Reserve Bank of India (RBI) to set up a private sector bank in 1994.
                            Today, Wissen Bank has a banking network of 6,499 branches and 18,868 ATM's in 3,226 cities/towns.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>
                </div>
            </div>
            <br></br><br></br><br></br>
            {/* Our Services */}
            <div className='my-5'>
                <h1 className='text-center sheading' style={{color:'#146C94', fontSize:'2cm'}}>Our Services</h1>
                
            </div>
            <div className='container-fluid mb-5 p-5 servicecontainer'>
                <div className='row'>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                            <div class="card">
                            <img src={require('../images/photo3.jpg')} className='card-img-top cardimg' alt="card img" />
                                <div class="card-body">
                                    <h5 class="card-title">Life Insurance</h5>
                                    <p class="card-text">Wissen Bank Life Insurance Policies</p>
                                    <NavLink to="#" class="servicelink"><button className='btn knowmorebtn'>Know More</button></NavLink>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                             <div class="card">
                             <img src={require('../images/photo1.jpg')} className='card-img-top cardimg' alt="card img" />
                                 <div class="card-body">
                                    <h5 class="card-title">Health Insurance</h5>
                                    <p class="card-text">Wissen Bank Health Insurance Policies</p>
                                    <NavLink to="#" class="servicelink"><button className='btn  knowmorebtn'>Know More</button></NavLink>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div className='col-md-3 col-12 mx-auto'>
                        <div className='row gy-4'>
                         <div class="card">
                         <img src={require('../images/vehicle.jpg')} className='card-img-top cardimg' alt="card img" />
                        <div class="card-body">
                          <h5 class="card-title">Vehicle Insurance</h5>
                            <p class="card-text">Wissen Bank Vehicle Insurance Policies</p>
                          <NavLink to="#" class="servicelink"><button className='btn  knowmorebtn'>Know More</button></NavLink>
                      </div>
                    </div>    
                    </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
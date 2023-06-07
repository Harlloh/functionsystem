
import { BrowserRouter,Routes,NavLink, Route, useLocation } from "react-router-dom";

import Icon from "./assets/icon.svg"
import { FaBars, FaEnvelope, FaHamburger, FaInstagram, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaTelegram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {HiMenuAlt3} from "react-icons/hi"
import { useState } from "react";
import { useEffect } from "react";
import Home from "./component/home";

const App = () => {
  const [showNav, setShowNav] = useState(false)
const nav = document.getElementById('nav')
  const handleNav = ()=>{
    setShowNav(prevstate => !prevstate);
  }

  const handleLinkClick = ()=>{
    setShowNav(false)
  }


  return (
    <BrowserRouter>
    <div>
          <header>
                <div className="container headersect">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Icon} alt="" />
                            <span style={{alignItems: 'flex-start', display: 'flex', flexDirection: 'column'}}>
                              <h1>Functionsystems</h1>
                              <i style={{color: 'white', fontSize: '12px'}}>Empowering Innovation, Driving Transformation</i>
                            </span>
                        </NavLink>
                    </div>
                    <span  className="ham">
                      {showNav ? <FaTimes className="cancel" onClick={handleNav} color="white" size={32}/> : <FaBars onClick={handleNav} color="white" size={32}/>}
                    </span>
                    <nav id='nav' className={`${showNav ? 'slideright' : ''}`}>
                        <ul>
                            <li><NavLink onClick={handleLinkClick} to="/">Home</NavLink></li>
                            <li><a onClick={handleLinkClick} href="#about"> About us</a></li>
                            <li><NavLink onClick={handleLinkClick} to="/services">Our Team</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/blogs">Services</NavLink></li>
                            <li><button><NavLink onClick={handleLinkClick} to="/contact">Contact</NavLink></button></li>
                        </ul>
                    </nav>
                </div>
          </header>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <footer id="about">
                <div className="container footcontainer">
                    <div className="socials">
                        <NavLink to="https://wa.me/message/HXDJ43QLJAMAK1"><span className="iconsocial"><FaWhatsapp  size={32} color="white"/></span></NavLink>
                        <NavLink to="https://t.me/+8562099234418"><span className="iconsocial"><FaTelegram  color="white" size={32}/></span></NavLink>
                        <NavLink to="https://rb.gy/2xptg"><span className="iconsocial"><FaInstagram  size={32} color="white"/></span></NavLink>
                        {/* <NavLink to="#"><span className="iconsocial"><FaTwitter  size={32} color="white"/></span></NavLink> */}
                    </div>
                    <cite>“The one who owns the information, owns the world!”</cite>
                   <NavLink className="contactMail" to="#">
                        <FaMapMarkerAlt size={15} color="white"/>
                        <p>Outhoomphone Ban Nalaotay, Savannakhet, Laos</p>
                    </NavLink>
                    <NavLink className="contactMail" to="mailto:Cyberkeelv_recovery@cyberservices.com">
                        <FaEnvelope size={15} color="white"/>
                        <p>Cyberkeelv_recovery@cyberservices.com</p>
                    </NavLink>
                    <div className="copyright">
                        <p>Cyberkeelv_recovery© Copyright 2023. All rights reserved</p>
                    </div>
                </div>
          </footer>
    </div>
    </BrowserRouter>
    
  );
};

export default App;


import { BrowserRouter,Routes,NavLink, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from "./components/cryptoservices";
import Blog from "./components/blog";
import Services from "./components/services";
import Contact from "./components/contact";
import Icon from "./assets/icon.svg"
import { FaBars, FaEnvelope, FaHamburger, FaInstagram, FaPhone, FaPhoneAlt, FaTelegram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {HiMenuAlt3} from "react-icons/hi"
import Cryptoservices from "./components/cryptoservices";
import { useState } from "react";
import Preload from "./components/preload";
import { useEffect } from "react";

const App = () => {
  const [showNav, setShowNav] = useState(false)
const nav = document.getElementById('nav')
  const handleNav = ()=>{
    setShowNav(prevstate => !prevstate);
  }

  const handleLinkClick = ()=>{
    setShowNav(false)
  }
 const [loading, setLoading] = useState(true)
 useEffect(()=>{
 setTimeout(() => {
    setLoading(false);
  }, 1500);

 }, [])

  return (
    <BrowserRouter>
    {loading ? 
    (<Preload/>)
    :
    <div>
          <header>
                <div className="container headersect">
                    <div className="logo">
                        <NavLink to="/">
                            <img src={Icon} alt="" />
                            <h1>CYBERKEELV</h1>
                        </NavLink>
                    </div>
                    <span  className="ham">
                      {showNav ? <FaTimes className="cancel" onClick={handleNav} color="white" size={32}/> : <FaBars onClick={handleNav} color="white" size={32}/>}
                    </span>
                    <nav id='nav' className={`${showNav ? 'slideright' : ''}`}>
                        <ul>
                            <li><NavLink onClick={handleLinkClick} to="/">Home</NavLink></li>
                            <li><a onClick={handleLinkClick} href="#about"> About us</a></li>
                            <li><NavLink onClick={handleLinkClick} to="/services">Services</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/blogs">News</NavLink></li>
                            <li><button><NavLink onClick={handleLinkClick} to="/contact">Contact</NavLink></button></li>
                        </ul>
                    </nav>
                </div>
          </header>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/crypto-services" element={<Cryptoservices/>}></Route>
          <Route path="/blogs" element={<Blog/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        <footer id="about">
                <div className="container footcontainer">
                    <div className="socials">
                        <NavLink to="https://wa.me/message/HXDJ43QLJAMAK1"><span className="iconsocial"><FaWhatsapp  size={32} color="white"/></span></NavLink>
                        <NavLink to="https://t.me/+8562099234418"><span className="iconsocial"><FaTelegram  color="white" size={32}/></span></NavLink>
                        <NavLink to="https://instagram.com/cyberkeel_vercelhelp?igshid=OGQ5ZDc2ODk2ZA=="><span className="iconsocial"><FaInstagram  size={32} color="white"/></span></NavLink>
                        {/* <NavLink to="#"><span className="iconsocial"><FaTwitter  size={32} color="white"/></span></NavLink> */}
                    </div>
                    <cite>“The one who owns the information, owns the world!”</cite>
                    {/* <NavLink className="contactMail" to="#">
                        <FaPhoneAlt size={15} color="white"/>
                        <p>+1 501-512-0642</p>
                    </NavLink> */}
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
             }  
    </BrowserRouter>
    
  );
};

export default App;

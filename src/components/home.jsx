import { NavLink, Link } from "react-router-dom";
import Icon from "../assets/icon.svg"
import weigh from "../assets/weigh.png"
import { AiOutlineCheck } from 'react-icons/ai';

import { FaCheck, FaCoins, FaFile, FaFileAlt, FaFileArchive } from "react-icons/fa";
import { useState,useEffect } from "react";
import { useRef } from "react";
import Preload from "./preload";



function Home() {
    const testimonials = [
        {
            index: 1,
            author: 'jack',
            content:'i totally recommend Cyberkeelv hacking servies they are reliable ethical hackers, i was able to recover my lost bitcoin in an investment fraud',
            location:'NY1',
            img_url: "../assets/icon.svg",
        },
        {
            index: 2,
            author: 'jack',
            content:'I had a great experience with Cyberkeelv hacking services. Their team of experts helped me regain access to my compromised account and secured it from further threats.',
            location:'NY2',
            img_url: "../assets/icon.svg",
        },
        {
            index: 3,
            author: 'jack',
            content:'Thanks to Cyberkeelv, I recovered my stolen funds. They are highly professional and provided excellent customer support throughout the recovery process.',
            location:'NY3',
            img_url: "../assets/icon.svg",
        },
        {
            index: 4,
            author: 'jack',
            content:'I highly recommend Cyberkeelv for their outstanding hacking services. They helped me recover important documents that were lost due to a security breach.  ',
            location:'NY4',
            img_url: "../assets/icon.svg",
        },
        {
            index: 5,   
            author: 'jack',
            content:'Cyberkeelv is the best in the business! Their expertise in cryptocurrency recovery is unmatched. They successfully recovered my stolen coins from a scammer.',
            location:'NY5',
            img_url: "../assets/icon.svg",
        },
        {
            index: 6,   
            author: 'jack',
            content:'Cyberkeelv is the best in the business! Their expertise in cryptocurrency recovery is unmatched. They successfully recovered my stolen coins from a scammer.',
            location:'NY6',
            img_url: "../assets/icon.svg",
        },
    ]
    const containerRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0)

    const handlePrevslide = ()=>{
        setActiveSlide(prevslide => prevslide === 0 ? testimonials.length - 1 : prevslide - 1)
    }
    const handleNextSlide = ()=>{
        setActiveSlide(prevslide => prevslide ===  testimonials.length - 1 ? 0 : prevslide + 1)
    }
   

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        })
    })
    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((el)=> observer.observe(el))

    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      setShouldAnimate(true);
    }, []);
  
    return ( 
        <div>
            <section className="herosect">
                <div className="container hersectcontainer">
                <h1 className={`herohead ${shouldAnimate ? 'animate' : ''}`}>
                    Recover And Invest Your Crypto Assets
                </h1>
                <p className={`heroparagraph ${shouldAnimate ? 'animate' : ''}`}>
                    We offer a range of services including cryptocurrency mining, hacking, and asset recovery for victims of scams. Our team of experienced and skilled professionals can assist you in reclaiming your stolen assets. Additionally, we provide guidance on cryptocurrency investment strategies to help you maximize your returns. If you are in need of our expertise, please do not hesitate to contact us for assistance.
                </p>
                <button id="herobutton">
                    <NavLink to="/services">Get Started</NavLink>
                </button>
                </div>
            </section>
            {/* <hr className="container"/> */}
            <section className="goalsect" id="goalsect">
                <div className="container goalconta">
                    <h2 id="goalhead" className={`${shouldAnimate ? 'animate' : ''}`}>Our Services and Our Goal</h2>
                    <p id="goalparaph"  className={`${shouldAnimate ? 'animate' : ''}`}>For over 5 years, Cyberkeelv has established itself as a prominent platform for recovery and investment services. Our unwavering commitment to providing individuals with effective solutions to their grievances, including those pertaining to cryptocurrency, has been a hallmark of our operation.</p>
                    <div className="visions">
                        <img className="weigh" src={weigh} alt="" />
                        <div className="objectives">
                            <p className="hidden">Our objective is to foster an informed community that is equipped to identify and combat fraudulent activities while also promoting awareness and understanding of digital currencies.</p>
                            <p className="hidden">We offer expedited recovery of lost cryptocurrencies and passwords without upfront fees, ensuring a resolution within 72 hours.</p>
                            <p className="hidden">Crypto Recovery, hacking services, crypto investment, crypto mining, and more...</p>
                            <p className="hidden">We have successfully resolved over 500,000 issues.</p>
                            <p className="hidden">Our customer support team is available round the clock, every day of the year, to assist you with any issues you may be facing.</p>
                            <button className="hidden"><NavLink to="/contact">Contact us</NavLink></button>
                        </div>
                    </div>
                </div>
            </section>   


             <section className="worksect">
                <div className="container workcont">
                    <h2>How it Works</h2>
                    <p>We invite you to reach out to us with any concerns you may have, as we are confident in our capacity to provide effective solutions and alleviate any anxieties you may be experiencing.</p>
                    <div className="works">
                        <div className="work hidden">
                            <NavLink to="/contact">
                                <FaFileAlt color="aqua" size={32}/>
                                <h3>File a complaint</h3>
                                <p>Our easy-to-use complaint filing system allows you to quickly and easily submit your concerns to our team.</p>
                            </NavLink>

                        </div>
                        <div className="work hidden">
                            <NavLink to="/contact">
                            <AiOutlineCheck size={24} />                                <h3>Process and Review complaint</h3>
                                <p>Our easy-to-use complaint filing system allows you to quickly and easily submit your concerns to our team.</p>
                            </NavLink>
                        </div>
                        <div className="work hidden">
                            <NavLink to="/contact">
                                <FaCoins size={32} color="gold"/>
                                <h3>Complaint Resolved</h3>
                                <p>Our easy-to-use complaint filing system allows you to quickly and easily submit your concerns to our team.</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>  

            <section className="testisect">
                <div className="container testi-container">
                    <p style={{color: 'white', textDecoration: 'underline'}}>TESTIMONIALS</p>
                    <h2 style={{color: 'white'}}>What they say about us</h2>
                    <div className="car-container">
                        {testimonials.map((testimony,index) => {
                            return(
                                <div key={index} className={`carousel ${index === activeSlide ? 'active' : ''}`}>
                                    <p>{testimony.content}</p>
                                    <div className="author">
                                        <img src={Icon} alt="" />
                                        <span>
                                            <p>{testimony.author}</p>
                                            <p>{testimony.location}</p>
                                        </span>
                                    </div>
                                </div>
                             )
                        })}
                        
                    </div>
                    <div className="btnsysy">
                        <button onClick={handleNextSlide}>next</button>
                        <button onClick={handlePrevslide}>prev</button>
                    </div>
                    <div className="tracar-container">
                        {testimonials.map((testimony,index) => {
                            return(
                                <div key={index} className={`carousell ${index === activeSlide ? 'active' : ''}`}>
                                    
                                </div>
                             )
                        })}
                        
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Home;
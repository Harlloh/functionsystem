import { FaArrowRight,FaUser, FaNetworkWired, FaRegLightbulb, FaSadCry, FaSmile } from "react-icons/fa";
import icon from '../assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = ()=>{
    const testimonials = [
        {
          index: 1,
          author: 'John Smith',
          content: 'I highly recommend Functionsystem for their exceptional technological services. They helped us implement cutting-edge solutions that greatly improved our efficiency and productivity.',
          location: 'San Francisco, USA',
          img_url: 'https://example.com/john-smith.jpg',
        },
        {
          index: 2,
          author: 'Emily Johnson',
          content: 'Functionsystem has been instrumental in our digital transformation journey. Their team of experts provided us with innovative strategies and solutions that helped us stay ahead in the competitive market.',
          location: 'London, UK',
          img_url: 'https://example.com/emily-johnson.jpg',
        },
        {
          index: 3,
          author: 'Michael Brown',
          content: 'I had a great experience working with Functionsystem. Their technological expertise and dedication to customer satisfaction are commendable. They delivered high-quality solutions that exceeded our expectations.',
          location: 'Sydney, Australia',
          img_url: 'https://example.com/michael-brown.jpg',
        },
        // Add more testimonials here...
      ];
      
      const [activeSlide, setActiveSlide] = useState(0)

      const handlePrevslide = ()=>{
          setActiveSlide(prevslide => prevslide === 0 ? testimonials.length - 1 : prevslide - 1)
      }
      const handleNextSlide = ()=>{
          setActiveSlide(prevslide => prevslide ===  testimonials.length - 1 ? 0 : prevslide + 1)
      }
     
    return(
        <div>
            <section className="hero">
                <div className="hero-content container">
                    <div style={{textAlign: 'center'}}>
                        <h1>Welcome to <span>Functionsystems</span> </h1>
                        <h2>Empowering Businesses Through Innovative Technology</h2>
                        <p>Transforming the way you work, collaborate, and grow.</p>
                        
                        <a href="#about"className="btn">Learn More <FaArrowRight/></a>
                    </div>
                </div>
            </section>

            <section className="introduction">
                 <div className="container introduction_content">
                    <div className="content">
                        <p>Get to know about us</p>
                        <h2>Functionsystem is a leading technological company committed to transforming industries and empowering businesses through innovative solutions. With our cutting-edge technologies and dedicated team, we strive to revolutionize the way organizations operate, enabling them to thrive in the digital age.</h2>
                        <p>We are a rapidly expanding technology company based in Silicon Valley, California. With a global reach. Our mission is to develop, innovate, and deliver cutting-edge solutions that empower businesses across industries. With a focus on advanced technologies and a customer-centric approach, we aim to provide affordable and high-quality digital solutions that drive growth and transform the way organizations operate.</p>
                    </div>
                    <img src={icon} alt="" />
                </div>
            </section>

            <section className="visionsect">
                <div className="container">
                    <h1>Vision/Mission</h1>
                    <div className="visions">
                        <div className="vision">
                            <div className="visionhead">
                                <FaRegLightbulb size='100px' color="rgb(1,0,26)"/>
                                <h4>01</h4>
                            </div>
                            <h1>Innovation and Technological Leadership</h1>
                            <p>
                            Continuously innovate and stay at the forefront of technological advancements.
                            Develop and deliver innovative products and services that exceed customer expectations.
                            Leverage emerging technologies to solve complex challenges and drive growth.
                            </p>
                            
                        </div>
                        <div className="vision">
                            <div className="visionhead">
                                <FaSmile size='100px' color="rgb(1,0,26)"/>
                                <h4>02</h4>
                            </div>
                            <h1>Customer Success and Satisfaction</h1>
                            <p>
                            Provide scalable and secure technological solutions that meet the needs of businesses. Deliver high-quality products and services that drive customer satisfaction.Enable digital transformation and deliver seamless, user-centric experiences.
                            </p>
                            
                        </div>
                        <div className="vision">
                            <div className="visionhead">
                                <FaNetworkWired size='100px' color="rgb(1,0,26)"/>
                                <h4>03</h4>
                            </div>
                            <h1>Collaboration and Partnerships</h1>
                            <p>
                            Foster a culture of collaboration, creativity, and excellence in technological advancements.Establish strategic partnerships and collaborations with other technology leaders.Build long-term partnerships with clients and become their trusted technology advisor.
                            </p>
                        </div>
                        <div className="vision">
                            <div className="visionhead">
                                <FaSadCry size='100px' color="rgb(1,0,26)"/>
                                    <h4>04</h4>
                                </div>
                                <h1>Sustainable Growth and Impact</h1>
                            <p>
                            Achieve sustainable business growth and financial success.Contribute to the advancement of society through responsible and ethical technology practices.Attract and retain top industry talent, fostering a diverse and inclusive workforce.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="key-features">
                <div className="container featurecontainer">
                    <h2>Key Features, Products, or Services</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>Feature/Product/Service 1</h3>
                            <p>Briefly describe the key features and benefits of your flagship product.</p>
                        </div>
                        <div className="feature">
                            <h3>Feature/Product/Service 2</h3>
                            <p>Highlight the unique selling points and advantages of another key product or service.</p>
                        </div>
                        <div className="feature">
                            <h3>Feature/Product/Service 3</h3>
                            <p>Showcase the innovative features and value proposition of a third offering.</p>
                        </div>
                        <div className="feature">
                            <h3>Service 1</h3>
                            <p>Outline the comprehensive services you provide and how they can benefit your clients.</p>
                        </div>
                        <div className="feature">
                            <h3>Service 2</h3>
                            <p>Emphasize the specialized expertise and value-add of another service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="employee-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="employees">
            {/* Employee 1 */}
            <div className="employee">
              <img src={icon} alt="Employee 1" />
              <h4>John Doe</h4>
              <p>Software Engineer</p>
            </div>

            {/* Employee 2 */}
            <div className="employee">
              <img src={icon}  alt="Employee 2" />
              <h4>Jane Smith</h4>
              <p>UI/UX Designer</p>
            </div>
            
            {/* Employee 3 */}
            <div className="employee">
              <img src={icon}  alt="Employee 3" />
              <h4>Mike Johnson</h4>
              <p>Project Manager</p>
            </div>
          </div>

          {/* Read More Button */}
          <NavLink to="/our-team" className="read-more-button">
            Read More <FaArrowRight />
          </NavLink>
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
                                        <FaUser className="img"/>
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
                        <button onClick={handlePrevslide}>prev</button>
                        <button onClick={handleNextSlide}>next</button>
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
    )
}
export default Home
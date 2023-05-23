import { FaBitcoin, FaDesktop, FaEllipsisH } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';

import 'react-icons';
import { useEffect, useState } from 'react';
function Services() {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
      setShouldAnimate(true);
    }, []);
    return ( 
        <div>
            <div className="container servicescont">
                <h1 className={`servieshead ${shouldAnimate ? 'animate' : ''}`}>
                Select the service you needed
                </h1>
                <div className={`servicecont ${shouldAnimate ? 'animate' : ''}`}>
                    <NavLink to="/crypto-services">
                    <div  className="boxes">
                        <FaBitcoin className='iconssss' size={32} color="white" />
                        <p>Crypto Services</p>                    
                    </div>
                    </NavLink>
                    <NavLink to="/contact">
                    <div  className="boxes">
                        <FaDesktop className='iconssss' size={32} color="white" />
                        <p>Hacking & Blackmail</p>                    
                    </div>
                    </NavLink>
                    <NavLink to="/contact">
                    <div  className="boxes">
                        <IoEllipsisHorizontalSharp className='iconssss'  size={32} color="white" />
                        <p>Others</p>                    
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
     );
}

export default Services;
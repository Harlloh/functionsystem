import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Cryptoservices() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    const hiddenElements = containerRef.current.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const services = [
    "Recovery",
    "Investment",
    "Buy/Sell",
    "Wallet Compromise",
    "Delayed Transaction",
    "Validation",
    "Transaction Glitch",
    "Claim Reward",
    "Swapping Issues",
    "Migration",
    "Maintenance",
    "TVLDrop",
    "Bridge",
    "Rectification",
    "Pending Withdrawal",
    "Slippage Error",
    "NFT Issues",
    "Delayed Transaction",
    "Airdrop",
    "Staking",
    "Token Issues",
    "Reauthentication"
  ];

  return (
    <div>
      <div className="container cryptoservicecontainer">
        <h1>Select the Crypto service you needed.</h1>
        <div className="cryptoservices"  ref={containerRef}>
          {services.map((service, index) => (
            <NavLink key={index} className="hidden" to="/contact">
              <span className="sesrvicesss">
                <p>{service}</p>
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cryptoservices;

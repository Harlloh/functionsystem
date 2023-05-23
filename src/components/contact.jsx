import { useState, useEffect } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";




function Contact() {
  const [shouldAnimate, setShouldAnimate] = useState(false);


  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    occupation: '',
    phone: '', // Changed to string
    email: '',
    amount: '',
    complaint: ''
  });

  const initialFormData = {
    name: '',
    country: '',
    occupation: '',
    phone: '',
    email: '',
    amount: '',
    complaint: ''
  };











  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // fetch('http://localhost:3001/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res => {
    //         console.log(res)
    //         if(res.text === 'OK'){
    //           setFormData(initialFormData);              toast.success('Your message as been sent succefully')
    //         }

    //     }).catch((err) => toast.error('Message sent failed'));


    emailjs.sendForm(
        'service_2k5lg8r',
        // 'service_stxwd6g',
        'template_oiqws3p',
        // 'template_xewlvcq', 
        e.target,
        'jg5LzRpGZ8fm9abb7'
        ).then(res => {
            console.log(res)
            if(res.text === 'OK'){
              setFormData(initialFormData);              toast.success('Your message as been sent succefully')
            }

        }).catch((err) => toast.error('Message sent failed'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div>
      <div className="container contactcont">
        <h1 className={`contactconthead ${shouldAnimate ? 'animate' : ''}`}>Complete this form to file a complaint</h1>
        <form onSubmit={handleSubmit} method="POST" action="/send">
          <div className="inputcontainer">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Country of Residence"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <PhoneInput
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              defaultCountry="US"
              onChange={value => setFormData(prevData => ({
                ...prevData,
                phone: value // Update the phone field with the new value
              }))}
              international
              countryCallingCodeEditable={true}
            />
          </div>
                    <div className="inputcontainer">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputcontainer">
                        <input
                            type="number"
                            placeholder="Amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="inputcontainer">
                        <textarea
                            name="complaint"
                            id="complaint"
                            cols="30"
                            rows="10"
                            placeholder="Complaint/Message"
                            value={formData.complaint}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit">Send Complaint</button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Contact;

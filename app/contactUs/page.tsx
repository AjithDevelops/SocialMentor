"use client"
import styles from "@/styles/style";
import React, { useState } from 'react';
import { FooterShort, Navbar } from "@/components";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("")
  const [subject, setSubject] = useState("Reg: A General Feedback");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setValidationMessage("All fields are required.");
      return;
    }
    // Call sendMail with the input details
    await sendMail({
      name,
      email,
      subject,
      message,
    });

    setValidationMessage(""); // Clear validation message
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleFeedbackTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFeedbackType(value);
    switch (value) {
      case "feedback":
        setSubject("Reg: A General Feedback");
        break;
      case "complaint":
        setSubject("Reg: Complaint about a Service");
        break;
      case "paymentIssue":
        setSubject("Reg: Payment Issue");
        break;
      default:
        setSubject(`Reg: `); // Set subject based on selection
    }
  };

    async function sendMail({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) {
    const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        isOwner: true,
        subject: subject,
        text: `${subject ?? 'Message'} from the user.\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
        }),
    });

    const data = await response.json();
    if (response.ok) {
        console.log('Email sent:', data.message);
    } else {
        console.error('Email send failed:', data.error);
    }
    }

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <div className="bg-primary flex-grow overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className={`${styles.elegantHeading2}`}>
              <span className="text-gradient"> Contact Us </span>
            </h2>
          </div>
        </div>
        <div className={`flex flex-col-reverse sm:flex-row justify-center items-center ml-4 mr-4`}>
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold text-gray-700 mb-2">Our Address:</h2>
            <div className="flex flex-col text-gray-600 text-sm">
              <p>Villa no 39 Casa Grande,</p>
              <p>Urnabo Phase 1, Vengadamangalam,</p>
              <p>Near Ponmar, Chennai - 600127</p>
            </div>
            <div className="mt-4 w-full flex justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.675288734836!2d80.1634760758561!3d12.864237017221514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52599252d8a2f7%3A0x6ce2a9647c4f87c9!2sCasa%20Grande%20Urbano!5e0!3m2!1sen!2sin!4v1734782456529!5m2!1sen!2sin" 
            width="250" 
            height="250" 
            loading="lazy" ></iframe>
            </div>
          </div>
          <div className={`${styles.contactContainer} ${styles.paddingX} sm:pt-10 text-sm sm:text-base`}>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div className="flex space-x-2">
                <select 
                  value={feedbackType} 
                  onChange={handleFeedbackTypeChange} 
                  className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="paymentIssue">Payment</option>
                  <option value="other">Other</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  value={subject} 
                  onChange={(e) => setSubject(e.target.value)} 
                  className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                />
              </div>
              <input 
                type="text" 
                placeholder="Your Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea 
                placeholder="Your Message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows={4}
              />
              {validationMessage && (
                <p className="text-red-500">{validationMessage}</p>
              )}
              <div className="flex">
                <button 
                  type="submit" 
                  className="py-2 text-sm sm:text-base text-sm px-3 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-y-2 hover:scale-110 transition-all ease-linear cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
          </div>
        </div>
      </div>
      <FooterShort />
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 mt-4 mx-auto w-1/3 bg-green-500 text-white text-center p-4 rounded">
          Message sent successfully!
        </div>
      )}
    </div>
  );
}

export default ContactUs;

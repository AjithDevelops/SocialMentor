"use client"
import styles from "@/styles/style";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FooterShort, Navbar } from "@/components";
import { youtubeReal, instagramReal, Flag_for_review, QrCode, closeRed } from "@/public/assets"; // Import icons
import Button from "@components/Button";

const OurServices: React.FC = () => {

  const [activeTab, setActiveTab] = useState("Instagram"); // State for active tab
  const [selectedOption, setSelectedOption] = useState("Followers"); // Default selected option
  const [count, setCount] = useState(0); // State for count (followers, likes, views)
  const [price, setPrice] = useState(""); // State for price
  const [followerType, setFollowerType] = useState("Real"); // State for follower type
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [isQrModalOpen, setIsQrModalOpen] = useState(false); // State for QR modal visibility
  const [userName, setUserName] = useState(""); // State for user name
  const [userEmail, setUserEmail] = useState(""); // State for user email
  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false); // State for user info modal
  const [validationMessage, setValidationMessage] = useState(""); // State for validation message

  // Define dropdown values and labels for followers
  const followerOptions = {
    fakeBot: [
      { value: 850, label: "5K Followers" },
      { value: 1500, label: "10K Followers" },
      { value: 2500, label: "20K Followers" },
      { value: 4800, label: "50K Followers" },
      { value: 7500, label: "1 Lakh Followers" },
    ],
    real: [
      { value: 1450, label: "1200 Real Tamil Followers" },
      { value: 2250, label: "2500 Real Tamil Followers" },
      { value: 4500, label: "5000 Real Tamil Followers" },
      { value: 8500, label: "10,000 Real Tamil Followers" },
    ],
  };

  // Define dropdown values and labels for Real Instagram views
  const realInstagramViewOptions = [
    { value: 220, label: "10K Views" },
    { value: 425, label: "25K Views" },
    { value: 675, label: "50K Views" },
    { value: 850, label: "1 Lakh Views" },
    { value: 3200, label: "5 Lakh Views" },
    { value: 5800, label: "1 Million Views" },
  ];

  // Define dropdown values and labels for Real Instagram likes
  const realInstagramLikeOptions = [
    { value: 120, label: "1000 Likes" },
    { value: 430, label: "5K Likes" },
    { value: 750, label: "10K Likes" },
    { value: 3450, label: "1 Lakh Likes" },
  ];

  // Define dropdown values and labels for Real YouTube lifetime subscribers
  const realYouTubeSubscriberOptions = [
    { value: 850, label: "1000 Lifetime Subscribers" },
    { value: 1500, label: "2000 Lifetime Subscribers" },
    { value: 3150, label: "5000 Lifetime Subscribers" },
    { value: 5950, label: "10K Lifetime Subscribers" },
    { value: 42000, label: "50K Lifetime Subscribers" },
    { value: 63500, label: "1 Lakh Lifetime Subscribers" },
  ];

  // Define dropdown values and labels for Real YouTube views
  const realYouTubeViewOptions = [
    { value: 250, label: "1000 Views" },
    { value: 500, label: "2500 Views" },
    { value: 950, label: "5000 Views" },
    { value: 1750, label: "10K Views" },
    { value: 3450, label: "25K Views" },
    { value: 6000, label: "50K Views" },
    { value: 10500, label: "1 Lakh Views" },
  ];

  // Define dropdown values and labels for Organic Watch Hours
  const organicWatchHoursOptions = [
    { value: 5000, label: "4000 Hours" },
  ];

  const [currentFollowerOptions, setCurrentFollowerOptions] = useState(followerOptions.real); // Default to Real followers

  const handleFollowerTypeChange = (type: string) => {
    setFollowerType(type);
    setCurrentFollowerOptions(type === "Fake/Bot" ? followerOptions.fakeBot : followerOptions.real);
  };

  useEffect(() => {
    calculatePrice(); // Calculate price on component mount
  }, [selectedOption, count]); // Recalculate price when selected option or count changes

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setCount(0); // Reset count when option changes
    setPrice(""); // Reset price when option changes
  };

  const calculatePrice = () => {
    setPrice(`₹${count.toFixed(2)}`); // Display price in rupees
  };

  async function sendMail() {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ajithkumar1109@gmail.com', // Change to the company's email address
        subject: `New Order Received: ${activeTab} - ${selectedOption}`, // Updated subject for company
        text: `New Order Notification\n\nOrder Details:\n- Platform: ${activeTab}\n- Type: ${selectedOption}\n- Amount: ${price}\n- Requested Service: ${getSelectedLabel()}\n\nCustomer Details:\n- Name: ${userName}\n- Email: ${userEmail}\n\nPlease process this order promptly.\nThank you!`, // Adjusted content for clarity
      }),
    });
  
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      console.log('Email sent:', data.message);
    } else {
      console.error('Email send failed:', data.error);
    }
  }

  const handleCountChange = (value: number) => {
      setCount(value);
  };

  // Add this useEffect to set initial count based on selected option
  useEffect(() => {
    if (activeTab === "Instagram" && selectedOption === "Followers") {
        setCount(currentFollowerOptions[0]?.value || 0); // Set initial count for Followers
    } else if (activeTab === "Instagram" && selectedOption === "Likes") {
        setCount(realInstagramLikeOptions[0]?.value || 0); // Set initial count for Likes
    } else if (activeTab === "Instagram" && selectedOption === "Views") {
        setCount(realInstagramViewOptions[0]?.value || 0); // Set initial count for Views
    } else if (activeTab === "YouTube" && selectedOption === "Subscribers") {
        setCount(realYouTubeSubscriberOptions[0]?.value || 0); // Set initial count for Subscribers
    } else if (activeTab === "YouTube" && selectedOption === "Watch Hours") {
        setCount(organicWatchHoursOptions[0]?.value || 0); // Set initial count for Watch Hours
    } else if (activeTab === "YouTube" && selectedOption === "Views") {
        setCount(realYouTubeViewOptions[0]?.value || 0); // Set initial count for YouTube Views
    }
}, [selectedOption, currentFollowerOptions]);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePayClick = () => {
    setIsUserInfoModalOpen(true); // Open user info modal on pay button click
  };

  const getSelectedLabel = () => {
    // Function to get the label based on the selected options
    if (activeTab === "Instagram") {
        if (selectedOption === "Followers") {
            return currentFollowerOptions.find(option => option.value === count)?.label || "N/A";
        } else if (selectedOption === "Likes") {
            return realInstagramLikeOptions.find(option => option.value === count)?.label || "N/A";
        } else if (selectedOption === "Views") {
            return realInstagramViewOptions.find(option => option.value === count)?.label || "N/A";
        }
    } else if (activeTab === "YouTube") {
        if (selectedOption === "Subscribers") {
            return realYouTubeSubscriberOptions.find(option => option.value === count)?.label || "N/A";
        } else if (selectedOption === "Watch Hours") {
            return organicWatchHoursOptions[0]?.label || "N/A"; // Assuming only one option for Watch Hours
        } else if (selectedOption === "Views") {
            return realYouTubeViewOptions.find(option => option.value === count)?.label || "N/A";
        }
    }
    return "N/A"; // Default return if no match found
};

  // New function to handle proceeding to QR modal
  const handleProceed = () => {
    if (!userName || !userEmail) {
      setValidationMessage("Please fill in both fields."); // Set validation message
      return;
    }
    setValidationMessage(""); // Clear message if validation passes
    setIsUserInfoModalOpen(false); // Close user info modal
    setIsQrModalOpen(true); // Open QR modal
    sendMail(); // Send mail after user info is validated
  };

  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <h2 className={`${styles.elegantHeading2}`}>
              <span className="text-gradient"> Our Services </span>
            </h2>
          </div>
        </div>
        <div className={`flex justify-center`}>
          <div className={`${styles.elegantContainer} ${styles.paddingX}`}>
            <div className={`${styles.paddingX} ${styles.flexStart} sm:mb-[30px] mb-[20px]`}>
              <div className={`${styles.boxWidth}`}>
              <h2 className={`${styles.elegantHeading3}`}>
              <span className=""> Social Media Engagement </span>
            </h2>
                <div className="sm:mt-4 mt-2 sm:p-4 p-2">
                  <div className="flex md:flex-row justify-center space-x-0 md:space-x-4 mb-4">
                    <div 
                      onClick={() => { setActiveTab("Instagram"); handleOptionChange("Followers"); }} 
                      className={`flex items-center cursor-pointer p-2 mr-4 transition ${activeTab === "Instagram" ? "border-b-2 border-yellow-500 text-yellow-500" : "text-gray-300"}`}
                    >
                      <Image src={instagramReal} alt="Instagram" className="w-8 h-8 mr-2" />
                      <span>Instagram</span>
                    </div>
                    <div 
                      onClick={() => { setActiveTab("YouTube"); handleOptionChange("Subscribers"); }} 
                      className={`flex items-center cursor-pointer p-2 transition ${activeTab === "YouTube" ? "border-b-2 border-yellow-500 text-yellow-500" : "text-gray-300"}`}
                    >
                      <Image src={youtubeReal} alt="YouTube" className="w-8 h-8 mr-2" />
                      <span>YouTube</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-8 mt-6">
                    {activeTab === "Instagram" ? (
                      ["Followers", "Likes", "Views"].map(option => (
                        <label key={option} className="flex items-center text-white text-lg">
                          <input 
                            type="radio" 
                            name="options" 
                            value={option} 
                            className="mr-2 sm:w-6 sm:h-6 w-3 h-3"
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                          />
                          {option}
                        </label>
                      ))
                    ) : (
                      ["Subscribers", "Watch Hours", "Views"].map(option => (
                        <label key={option} className="flex items-center text-white text-lg">
                          <input 
                            type="radio" 
                            name="options" 
                            value={option} 
                            className="mr-2 sm:w-6 sm:h-6 w-3 h-3"
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                          />
                          {option}
                        </label>
                      ))
                    )}
                  </div>
                  {selectedOption && (
                    <div className="mt-4 flex flex-col items-center">
                      <select 
                        value={followerType} 
                        onChange={(e) => handleFollowerTypeChange(e.target.value)} 
                        className={`${styles.elegantDropdown} shadow-md`}
                      >
                        {activeTab === "Instagram" && selectedOption === "Followers" && (
                          <>
                            <option value="Real">Real Instagram Followers</option>
                            <option value="Fake/Bot">Fake/Bot Instagram Followers</option>
                          </>
                        )}
                        {activeTab === "Instagram" && selectedOption === "Likes" && (
                          <>
                            <option value="Real">Real Instagram Likes</option>
                          </>
                        )}
                        {activeTab === "Instagram" && selectedOption === "Views" && (
                          <>
                            <option value="Real">Real Instagram Views</option>
                          </>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Subscribers" && (
                          <>
                            <option value="Real">Real YouTube Subscribers</option>
                          </>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Watch Hours" && (
                          <option value="Organic">Organic Watch Hours</option>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Views" && (
                          <>
                            <option value="Real">Real YouTube Views</option>
                          </>
                        )}
                      </select>
                      {activeTab === "Instagram" && selectedOption === "Followers" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {currentFollowerOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "Instagram" && selectedOption === "Views" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {realInstagramViewOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "Instagram" && selectedOption === "Likes" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {realInstagramLikeOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "YouTube" && selectedOption === "Subscribers" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {realYouTubeSubscriberOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "YouTube" && selectedOption === "Views" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {realYouTubeViewOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "YouTube" && selectedOption === "Watch Hours" && (
                        <select 
                          value={count} 
                          onChange={(e) => handleCountChange(Number(e.target.value))} 
                          className={`${styles.elegantDropdown} shadow-md`}
                        >
                          {organicWatchHoursOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      )}
                      {activeTab === "Instagram" && (
                        <div className="flex items-center mt-4">
                          <input 
                            type="checkbox" 
                            id="flagForReview" 
                            className="mr-2" 
                          />
                          <div className="text-white text-md">
                            Disabled "Flag for Review" in my account <span><a href="#" className="text-blue-500 ml-2 underline" onClick={toggleModal}>How to disable?</a></span>
                            </div>
                          </div>
            
                      )}
                      <button 
                        className="py-2 px-3 mt-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-y-2 hover:scale-110 transition-all ease-linear cursor-pointer" 
                        onClick={handlePayClick}
                      >
                        <span>Pay {price}</span>
                      </button>
                    </div>
                  )}
                </div>
                {selectedOption === "Followers" && followerType === "Fake/Bot" && (
                  <div className="mt-6 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> These followers are not real and may get dropped in the future.
                    </p>
                  </div>
                )}

                {activeTab === "YouTube" && selectedOption === "Watch Hours" && (
                  <div className="mt-6 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> 2-3 months time duration (approx.) required to complete.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        <div className={`flex justify-center mb-10`}>
        <div className={`${styles.elegantContainer} ${styles.paddingX} sm:flex`}>
        <div className="flex-1 flex flex-col sm:ml-10">
            <h2 className={`${styles.elegantHeading4} text-center sm:text-left`}>
                Manage your Social Media Account
            </h2>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 mt-4 sm:mt-0 sm:mr-10`} onClick={() => window.location.href='/goViral'}>
            <Button />
        </div>
    </div>
      </div>
      <FooterShort />
      </div>

      {/* Modal for Flag_for_review */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 m-10">
          <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full flex flex-col items-center">
            <p className="text-center mb-4">Make sure to turn off the <b>"Flag for Review"</b> option in your insta account before payment</p>
            <Image 
              src={Flag_for_review} 
              alt="Flag for Review" 
              className="sm:w-3/4 w-1/2 h-auto max-h-85"
            />
            <button onClick={toggleModal} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Close</button>
          </div>
        </div>
      )}

      {/* Modal for QR Code */}
      {isQrModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 m-10">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-center mb-2">Please scan to pay the amount:</p>
            <Image 
              src={QrCode} 
              alt="QR Code" 
              className="sm:w-3/4 w-1/2 h-auto max-h-85 mb-4"
            />
            <div className="w-full mb-4">
                <h4 className="font-medium sm:text-base text-sm">Order Details:</h4>
                <p className="sm:text-base text-sm">✓ {activeTab} {selectedOption}  </p>
                <p className="sm:text-base text-sm">✓ {getSelectedLabel()}</p>
                <p className="sm:text-base text-sm">Amount: <span className="text-md font-bold"> {price} </span></p>
                <div className="border border-blue-500 bg-blue-100 p-4 rounded-md mt-4">
                    <p className="sm:text-base text-sm">Once paid, send the payment screenshot to <a href="https://www.instagram.com/tharun_socialmentor" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Tharun Kumar</a> to start the process.</p>
                </div>
            </div>
            <button onClick={() => setIsQrModalOpen(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for user information */}
      {isUserInfoModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 m-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center">
                <div className="flex justify-between w-full mb-4">
                    <h2 className="text-2xl font-semibold text-center">Enter Your Details</h2>
                    <button onClick={() => setIsUserInfoModalOpen(false)} className="text-gray-500 hover:text-gray-800">
                    <Image src={closeRed} className="object-contain" alt="close" className="w-3 h-3" />
                    </button>
                </div>
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={userName} 
                    onChange={(e) => {
                        setUserName(e.target.value);
                        setValidationMessage("");
                    }} 
                    className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={userEmail} 
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                        setValidationMessage("");
                    }} 
                    className="mb-4 p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {validationMessage && (
                  <p className="text-red-500 text-sm">{validationMessage}</p>
                )}
                <button 
                    onClick={handleProceed}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Proceed
                </button>
            </div>
        </div>
      )}
    </>
  );
}

export default OurServices;
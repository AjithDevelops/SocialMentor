"use client"
import styles from "@/styles/style";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from "@/components";
import { youtubeReal, instagramReal } from "@/public/assets"; // Import icons
import Button from "@components/Button";

const OurServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Instagram"); // State for active tab
  const [selectedOption, setSelectedOption] = useState("Followers"); // Default selected option
  const [count, setCount] = useState(1000); // State for count (followers, likes, views)
  const [price, setPrice] = useState(""); // State for price
  const [followerType, setFollowerType] = useState("Real"); // State for follower type

  useEffect(() => {
    calculatePrice(); // Calculate price on component mount
  }, [selectedOption, count]); // Recalculate price when selected option or count changes

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setCount(1000); // Reset count to 1000 when option changes
    setPrice(""); // Reset price when option changes
  };

  const calculatePrice = () => {
    let calculatedPrice = 0;
    if (selectedOption === "Followers") {
      calculatedPrice = count * 0.1; // Example pricing logic for followers
    } else if (selectedOption === "Likes") {
      calculatedPrice = count * 0.05; // Example pricing logic for likes
    } else if (selectedOption === "Views") {
      calculatedPrice = count * 0.02; // Example pricing logic for views
    }
    setPrice(`₹${calculatedPrice.toFixed(2)}`); // Display price in rupees
  };

  const handleCountChange = (value: number) => {
    if (value >= 1000) {
      setCount(value);
    } else {
      setCount(1000); // Set to minimum if below 1000
    }
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
            <div className={`${styles.paddingX} ${styles.flexStart} sm:mb-[50px] mb-[20px]`}>
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
                        onChange={(e) => setFollowerType(e.target.value)} 
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
                            <option value="Fake/Bot">Fake/Bot Instagram Likes</option>
                          </>
                        )}
                        {activeTab === "Instagram" && selectedOption === "Views" && (
                          <>
                            <option value="Real">Real Instagram Views</option>
                            <option value="Fake/Bot">Fake/Bot Instagram Views</option>
                          </>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Subscribers" && (
                          <>
                            <option value="Real">Real YouTube Subscribers</option>
                            <option value="Fake/Bot">Fake/Bot YouTube Subscribers</option>
                          </>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Watch Hours" && (
                          <option value="Organic">Organic Watch Hours</option>
                        )}
                        {activeTab === "YouTube" && selectedOption === "Views" && (
                          <>
                            <option value="Real">Real YouTube Views</option>
                            <option value="Fake/Bot">Fake/Bot YouTube Views</option>
                          </>
                        )}
                      </select>
                      <input 
                        type="number" 
                        placeholder={`Enter number of ${selectedOption.toLowerCase()}`} 
                        className={`${styles.elegantInput} shadow-md`}
                        value={count}
                        onChange={(e) => handleCountChange(Number(e.target.value))}
                      />
                      <button 
                        className="py-2 px-3 mt-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[10px] hover:translate-y-2 hover:scale-110 transition-all ease-linear cursor-pointer" 
                        onClick={() => alert(`Proceeding to pay: ${price}`)}
                      >
                        <span>Pay {price}</span>
                      </button>
                    </div>
                  )}
                </div>
                {selectedOption === "Followers" && followerType === "Fake/Bot" && (
                  <div className="mt-10 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> These followers are not real and may get reduced in the future.
                    </p>
                  </div>
                )}

                {selectedOption === "Likes" && followerType === "Fake/Bot" && (
                  <div className="mt-10 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> These likes are not real and may get reduced in the future.
                    </p>
                  </div>
                )}

                {selectedOption === "Views" && followerType === "Fake/Bot" && (
                  <div className="mt-10 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> These views are not real and may get reduced in the future.
                    </p>
                  </div>
                )}

                {activeTab === "YouTube" && followerType === "Fake/Bot" && (
                  <div className="mt-10 flex justify-center">
                    <p className="text-black text-sm text-center bg-white/90 backdrop-blur-md p-2 rounded-md border border-white/20 shadow-lg">
                      <span className="font-bold">Disclaimer:</span> These subscribers are not real and may get reduced in the future.
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
      </div>
    </>
  );
}

export default OurServices;
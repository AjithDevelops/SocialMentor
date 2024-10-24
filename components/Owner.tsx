import React, { useEffect, useRef, useState } from 'react';
import styles from "@/styles/style";
import Button from "./Button";
import "../app/gloal.css"
import { insta_1 } from "@/public/assets";
import Image from "next/image";

const Owner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [count, setCount] = useState(20013256); // Initial count value
    const [displayCount, setDisplayCount] = useState(500); // Displayed count value
    const [countingText, setCountingText] = useState('...'); // Initial counting text with dots
    const [isCountingComplete, setIsCountingComplete] = useState(false); // New state to track counting completion
    const [showCountingText, setShowCountingText] = useState(false); // New state to control visibility of counting text

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after the image is visible
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null; // Declare interval variable

        if (isVisible) { // Start counting only if the content is visible
            interval = setInterval(() => {
                setDisplayCount(prev => {
                    if (prev < count) {
                        return Math.min(prev + 500000, count); // Increment by 500,000 or reach the target
                    }
                    clearInterval(interval!);
                    setIsCountingComplete(true); // Mark counting as complete
                    return prev;
                });
            }, 50); // Adjust the speed of the count increase
        }

        return () => {
            if (interval) {
                clearInterval(interval); // Clear interval on cleanup
            }
        };
    }, [count, isVisible]); // Added isVisible to the dependency array

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCountingText(prev => (prev.length === 3 ? '.....' : '...')); // Toggle between 3 and 4 dots
        }, 500); // Change every second

        return () => clearInterval(textInterval);
    }, [isCountingComplete]);

    useEffect(() => {
        if (isCountingComplete) {
            const timer = setTimeout(() => {
                setShowCountingText(true); // Show counting text after a delay
            }, 100); // Delay of 1 second

            return () => clearTimeout(timer);
        }
    }, [isCountingComplete]);

    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingOwner} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow relative overflow-hidden`}>
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div> {/* Background image */}
            <div className="flex-1 flex flex-col relative z-10"> {/* Added z-index for layering */}
                <h2 className={`${styles.heading2} text-shadow`}>
                    Generated over <span className="text-gradient font-bold text-[60px] sm:text-[100px]">{displayCount.toLocaleString()}</span> Organic Views
                </h2>
                {showCountingText && (
                    <h2 className={`${styles.heading3} sm:text-[40px] animate-fadeIn`}>
                        &nbsp;<span className="counting-text text-yellow-500">& Counting {countingText}</span>
                    </h2>
                )}
            </div>
            <div className="separator" style={{ height: '2px', background: 'linear-gradient(to right, #00c6ff, #0072ff)', margin: '20px 0' }}></div>
            <div className={`${styles.flexCenter} flex-col sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-10`}>
                <div 
                    className={`${styles} py-1 px-1 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] transition-transform duration-300 ease-linear cursor-pointer hover:scale-105`} // CSS hover effect
                >
                    <img 
                        ref={imageRef} 
                        src="/assets/SocialMentorImage.jpg" 
                        alt="Social Mentor Instagram" 
                        className={`owner-image ${isVisible ? 'flip' : ''} w-full h-auto`} 
                    />              
                </div>
                <div className={`${styles.paragraph} max-w-[470px] mt-5 owner-list`}>
                    <div className='owner-list-item flex items-center'>
                        <span className='owner-name text-lg font-bold'>Tharun Kumar K</span>
                        <span className='owner-name ml-2 text-lg font-medium text-[#33bbcf]'>@tharun_socialmentor</span>
                    </div>
                    <div className="owner-list-item flex items-center ml-2 text-blue-500">
                        <Image src={insta_1} alt="Instagram Icon" className="w-8 h-8 mr-1" />
                        <span className="text-white">70K Followers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Owner;

import styles, { layout } from "@/styles/style";
import { features } from "@/constants";
import Button from "./Button";
import Image from "next/image";
import { FeatredCardProps } from "@types";
import "../app/gloal.css"
import React, { useEffect, useRef, useState } from 'react'; // Import necessary hooks

const FeaturesCard: React.FC<FeatredCardProps & { className?: string }> = ({ icon, title, content, index }) => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const cardRef = useRef<HTMLDivElement | null>(null); // Ref for the card

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when in view
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current); // Start observing the card
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Clean up observer on unmount
      }
    };
  }, []);

  // Determine animation direction based on index
  const animationClass = isVisible ? (index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight') : '';

  return (
    <div
      ref={cardRef} // Attach ref to the card
      className={`flex flex-row p-6 w-full rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card ${animationClass}`} // Apply animation class conditionally
    >
      <div
        className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
      >
        <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business: React.FC = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center pb-[20px]`}>
      Simple 5-step process to make your brand Go Viral!
      </h2>
      {/* <p className={`${styles.paragraph} mt-5`}>
        With the right credit card, you can improve your financial lif e by
        building credit, earning rewards and saving money. But with hundreds of
        credits cards on the market.
      </p> */}
    
    <div className={`${layout.sectionImg} sectionItems flex-col w-full`}>
      {features.map((feature, index) => (
        <FeaturesCard key={feature.id} {...feature} index={index} className="animated-item" />
      ))}
       {/* <Button styles="mt-10" /> */}
    </div>
    </div>
  </section>
);

export default Business;

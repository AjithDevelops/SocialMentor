import styles from "@/styles/style";
import "../app/gloal.css"; // Import global styles
import { discount, robot } from "@/public/assets";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero: React.FC = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[12px] px-8 bg-discount-gradient rounded-[20px] mb-4">
        <Image src={discount} alt="discount" className="w-[48px] h-[48px]" />
        <p className={`${styles.paragraph} ml-4`}>
          <span className="text-yellow-500 font-bold animate-pulse">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className={`flex-1 font-poppins font-semibold ss:text-[80px] text-[60px] text-white ss:leading-[120px] leading-[90px] ${styles.animatedText} social-mentor-animation`}>
          <span className="text-gradient">Social Mentor</span>
        </h1>

      </div>
      <p className={`${styles.paragraph} max-w-[470px] mb-10`}>
        We Empower Your Digital presence with Entertainment 
      </p>
      <h1 className="w-full font-poppins font-semibold ss:text-[28px] text-[24px] text-white ss:leading-[50px] leading-[40px]">
        <span className="animated-item">✦ &nbsp;Social Media Mastery</span>
        <br />
        <span className="animated-item">✦ &nbsp;Digital Marketing</span>
        <br />
        <span className="animated-item">✦ &nbsp;Lead Generation & Automation</span>
        <br />
        <span className="animated-item">✦ &nbsp;Web Design & Development</span>
        <br />
        <span className="animated-item">✦ &nbsp;Data Analysis & Insights</span>
      </h1>

    </div>

    <div className={`${styles.flexCenter} flex-1 flex flex-col mx-4 md:my-0 my-10 relative space-y-4`}>
      <div className="flex justify-start w-full">
        <div className="bubble-animation"><GetStarted getStartedText={"Our"} startedText={"Services"} /></div> {/* Wrap in a div for animation */}
      </div>
      <div className="flex justify-end w-full">
        <div className="bubble-animation"><GetStarted getStartedText={"Let's"} startedText={"Go Viral"} /></div> {/* Wrap in a div for animation */}
      </div>
      <div className="flex justify-start">
        <div className="bubble-animation"><GetStarted getStartedText={"Get"} startedText={"Entertained"} /></div> {/* Wrap in a div for animation */}
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;

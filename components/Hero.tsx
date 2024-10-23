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
      <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ${styles.animatedText} social-mentor-animation`}>
           {/* <br className="sm:block hidden" />{" "} */}
          <span className="text-gradient">Social Mentor</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins font-semibold ss:text-[24px] text-[20px] text-white ss:leading-[40px] leading-[30px]">
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
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We Empower Your Digital presence with Entertainment 
      </p>
    </div>
    {/* <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
      <Image
        src={robot}
        alt="billings"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div> */}
    <div className={`${styles.flexCenter} ss:hidden`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;

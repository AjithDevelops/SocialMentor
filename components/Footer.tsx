import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
      <h1 className={`flex-1 font-poppins font-semibold ss:text-[40px] text-[30px] text-white ss:leading-[20px] leading-[10px] ${styles.animatedText} social-mentor-animation`}>
          <span className="text-gradient">Social Mentor</span>
        </h1>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Grow your business with Social Mentor
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col ss:my-0 my-4 mix-w-[150px"
          >
            <h4
              className={`font-poppins font-medium sm:text-[18px] text-[16px] sm:leading-[27px] leading-[20px] text-white`}
            >
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal sm:text-[16px] text-[14px] sm:leading-[24px] leading-[20px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  <a href={`${link.link}`} rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024 Social Mentor. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            src={social.icon}
            key={social.id}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
          />
        ))}
      </div>
    </div>
    <footer className="flex flex-row md:mt-0 mt-6 text-white text-center">
        <p className={`animate-shrink-expand`}>
            Developed by Ajith Kumar. <a style={{textDecoration: "underline", color: "#007bff"}} href="https://www.instagram.com/reactjs_with_ajith">@reactjs_with_ajith</a>
        </p>
    </footer>
  </section>
);

export default Footer;

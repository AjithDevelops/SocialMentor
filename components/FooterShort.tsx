import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
const FooterShort: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mx-10`}>
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

export default FooterShort;

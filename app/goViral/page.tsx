"use client"
import styles from "@/styles/style";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Owner, InstaReels, Plans } from "@/components"
const GoViral: React.FC = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-primary ${styles.flexStart}`}>
       
          <div className={`${styles.boxWidth}`}>
             <h2 className={`${styles.heading2} text-center pb-[20px]`}>
      <span className="text-gradient">Let's make you Viral in social media</span>
      </h2>

            <video
        className='video-animation slideFadeInLeft'
        controls
        
        autoPlay
        loop
        style={{
          border: '0',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '10px', // Increased margin for more spacing
          transform: 'rotate(0deg)', // Added rotation for angle
          width: '120%', // Set width to 100% for full container width
          height: 'auto', // Set height to auto to maintain aspect ratio
        }}
      >
        <source src='/assets/Adwhite.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            {/* End of Video Section */}
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Plans />
          </div>
        </div>
      </div>
    </>
  )
}

export default GoViral
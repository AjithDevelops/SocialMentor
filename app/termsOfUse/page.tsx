"use client"
import styles from "@/styles/style";
import { Navbar, TermsOfUse, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Owner, InstaReels } from "@/components"
const Home: React.FC = () => {
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
          <TermsOfUse />
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          
          <div>
         </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

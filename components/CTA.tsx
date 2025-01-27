import styles from "@/styles/style";
import Button from "./Button";
const CTA: React.FC = () => (
    <section id="services" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>
                Let's try our service now!
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Everything you need to know about Social Mentor and how it can help you grow your business on the planet.
            </p>
        </div>
        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`} onClick={() => window.location.href='/ourServices'}>
            <Button />
        </div>
    </section>
)

export default CTA;
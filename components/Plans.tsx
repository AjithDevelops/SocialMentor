"use client"
import styles from "@/styles/style";
import Button from "./Button";

const Plans: React.FC = () => {
    return (
    <div className="bg-primary overflow-hidden flex flex-col sm:flex-row justify-around gap-2">
    <div className={`${styles.flexCenter} ${styles.marginPlans} ${styles.paddingPlans} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-6">
            <h2 className={`${styles.heading3} text-left text-white`}>
                Basic
            </h2>
            <ul className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 8 Posters
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 8 Reels
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account optimization
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account handling
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Lead generation
                </li>
            </ul>
            <strong className="text-yellow-500 mt-4">₹15000/- Monthly (With Ad spends)</strong>
            <div className={`${styles.flexCenter} mt-4`}>
                <Button />
            </div>
        </div> 
    </div>

    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingPlans} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-6">
            <h2 className={`${styles.heading3} text-left text-white`}>
                Advance
            </h2>
            <ul className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 10 Posters
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 16 Reels
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account optimization
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account handling
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Lead generation
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Google business account setup
                </li>
            </ul>
            <strong className="text-yellow-500 mt-4">₹25000/- Monthly (With Ad spends)</strong>
            <div className={`${styles.flexCenter} mt-4`}>
                <Button />
            </div>
        </div> 
    </div>

    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingPlans} flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-6">
            <h2 className={`${styles.heading3} text-left text-white`}>
                Pro
            </h2>
            <ul className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 16 Posters
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> 25 Reels
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account optimization
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Account handling
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Lead generation
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Google business account setup
                </li>
                <li className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> Website design
                </li>
            </ul>
            <strong className="text-yellow-500 mt-4">₹40000/- Monthly (With Ad spends)</strong>
            <div className={`${styles.flexCenter} mt-4`}>
                <Button />
            </div>
        </div> 
    </div>
    </div>
    )
};

export default Plans;

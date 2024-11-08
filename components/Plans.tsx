"use client"
import styles from "@/styles/style";
import Button from "./Button";
import { useState } from 'react';
import { QrCode } from "@/public/assets";
import Image from 'next/image';

const Plans: React.FC = () => {
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");

    const handlePayClick = (plan: string) => {
        setSelectedPlan(plan);
        setIsQrModalOpen(true);
    };

    return (
    <div className="bg-primary overflow-hidden flex flex-col sm:flex-row justify-around gap-2">
    <div className={`${styles.flexCenter} ${styles.marginPlans} ${styles.paddingPlans} sm:my-4 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-2">
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
            <div className={`${styles.flexCenter} mt-4`} onClick={() => handlePayClick("₹15000/- Monthly (With Ad spends)")}>
                <Button />
            </div>
        </div> 
    </div>

    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingPlans} sm:my-4 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-2">
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
            <div className={`${styles.flexCenter} mt-4`} onClick={() => handlePayClick("₹25000/- Monthly (With Ad spends)")} >
                <Button />
            </div>
        </div> 
    </div>

    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingPlans} sm:my-4 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow transition-transform transform hover:scale-105`}>
        <div className="flex-1 flex flex-col items-start p-2">
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
            <div className={`${styles.flexCenter} mt-4`} onClick={() => handlePayClick("₹40000/- Monthly (With Ad spends)")}>
                <Button />
            </div>
        </div> 
    </div>

    {isQrModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 m-10">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <p className="text-center mb-2">Please scan to pay the amount:</p>
                <Image 
                    src={QrCode} 
                    alt="QR Code" 
                    className="sm:w-3/4 w-1/2 h-auto max-h-85 mb-4"
                />
                <div className="w-full mb-4">
                    <h4 className="font-medium sm:text-base text-sm">Order Details:</h4>
                    <p className="sm:text-base text-sm">✓ Selected Plan: {selectedPlan}</p>
                    <div className="border border-blue-500 bg-blue-100 p-4 rounded-md mt-4">
                    <p className="sm:text-base text-sm">Once paid, send the payment screenshot to <a href="https://www.instagram.com/tharun_socialmentor" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Tharun Kumar</a> to start the process.</p>
                </div>
                </div>
                <button onClick={() => setIsQrModalOpen(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Close
                </button>
            </div>
        </div>
    )}
    </div>
    )
};

export default Plans;

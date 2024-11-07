"use client"
import styles from "@/styles/style";
import React, { useState } from 'react';
import Image from "next/image";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer, Owner, InstaReels } from "@/components"
import { servicesData } from "@/constants"; // Import the new services data
import { youtubeReal, instagramReal } from "@/public/assets"; // Import the icons for YouTube, Instagram, and MPS

// Define the type for a service
interface Service {
  id: string;
  service: string;
  rate: string;
  minOrder: number;
  maxOrder: number;
  averageTime: string;
}

interface ServiceCategory {
  category: string;
  services: Service[];
  type: string;
}

const OurServices: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedType, setSelectedType] = useState<string>("All"); // New state for selected type

  const handleViewClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "YouTube":
        return youtubeReal;
      case "Instagram":
        return instagramReal;
      default:
        return null;
    }
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  // Filter services based on selected type
  const filteredServicesData = servicesData.filter(category => 
    selectedType === "All" || category.type === selectedType
  );

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
            <h2 className={`${styles.heading2} text-center pb-[40px]`}>
              <span className="text-gradient">Our Services</span>
            </h2>
          </div>
        </div>
        {/* Filter Buttons */}
        <div className="flex justify-center mb-4">
          <button 
            onClick={() => handleTypeChange("All")} 
            className={`py-2 px-4 rounded ml-2 text-white ${selectedType === "All" ? "bg-gray-800 border border-gray-900" : "bg-gray-500"}`}
          >
            All Offers
          </button>
          <button 
            onClick={() => handleTypeChange("YouTube")} 
            className={`py-2 px-4 rounded ml-2 text-white ${selectedType === "YouTube" ? "bg-gray-800 border border-gray-900" : "bg-gray-500"}`}
          >
            YouTube Offers
          </button>
          <button 
            onClick={() => handleTypeChange("Instagram")} 
            className={`py-2 px-4 rounded ml-2 text-white ${selectedType === "Instagram" ? "bg-gray-800 border border-gray-900" : "bg-gray-500"}`}
          >
            Insta Offers
          </button>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            {filteredServicesData.map((category: ServiceCategory) => (
              <div key={category.category} className="mb-8">
                <div className="flex items-center mb-4">
                  <Image src={getIcon(category.type)} alt={category.type} className="w-6 h-6 mr-2" />
                  <h3 className="text-2xl font-bold" style={{ color: "#ffffff" }}>{category.category}</h3>
                </div>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">ID</th>
                      <th className="py-3 px-6 text-left">Service</th>
                      <th className="py-3 px-6 text-left">Rate</th>
                      <th className="py-3 px-6 text-left">Min Order</th>
                      <th className="py-3 px-6 text-left">Max Order</th>
                      <th className="py-3 px-6 text-left">Average Time</th>
                      <th className="py-3 px-6 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {category.services.map((service) => (
                      <tr key={service.id} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6">{service.id.split('-')[1]}</td>
                        <td className="py-3 px-6">{service.service}</td>
                        <td className="py-3 px-6">{service.rate}</td>
                        <td className="py-3 px-6">{service.minOrder}</td>
                        <td className="py-3 px-6">{service.maxOrder}</td>
                        <td className="py-3 px-6">{service.averageTime}</td>
                        <td className="py-3 px-6 flex space-x-2">
                          <button className="bg-blue-500 text-white py-1 px-3 rounded" onClick={() => handleViewClick(service)}>View</button>
                          <button className="bg-green-500 text-white py-1 px-3 rounded">Buy</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for displaying service details */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedService.service}</h2>
            <p><strong>ID:</strong> {selectedService.id}</p>
            <p><strong>Rate:</strong> {selectedService.rate}</p>
            <p><strong>Min Order:</strong> {selectedService.minOrder}</p>
            <p><strong>Max Order:</strong> {selectedService.maxOrder}</p>
            <p><strong>Average Time:</strong> {selectedService.averageTime}</p>
            <div className="mt-4">
              <button className="bg-green-500 text-white py-1 px-3 rounded" onClick={handleCloseModal}>Buy</button>
              <button className="bg-red-500 text-white py-1 px-3 rounded ml-2" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OurServices;
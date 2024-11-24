"use client"
import { useState } from 'react';
import { close, logo, menu, GoogleImage } from "@/public/assets";
import { navLinks } from "@/constants";
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import {FaGoogle, FaTimes} from 'react-icons/fa'

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data: session, status } = useSession();

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <Image src={logo} alt="HooBank" width={124} height={32} /> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`/#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
        {session ? (
          <li className="ml-10">
            <button 
              className="bg-red-gradient text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </li>
        ) : (
          <li className="ml-10">
            <a 
              href="#" 
              onClick={handleLoginClick}
              className="bg-[#33bbcf] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#2a96a7] transition duration-300">
              Login
            </a>
          </li>
        )}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image src={toggle ? close : menu}
          alt="menu"
          className="object-contain"
          width={28}
          height={28}
          onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`/#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            {session ? (
              <li className="mt-4">
                <button 
                  className="bg-red-gradient text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="mt-4">
                <a 
                  href="#" 
                  onClick={handleLoginClick}
                  className="bg-[#33bbcf] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#2a96a7] transition duration-300">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative">
            <FaTimes 
              className="absolute top-4 right-4 cursor-pointer"
              onClick={closeModal}
            />
            <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
            <p className="mb-4 text-center">To continue with Social Mentor</p>
            <button 
              className="bg-blue-gradient  py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              onClick={() => signIn('google')}
            >
              <span className="flex items-center"><Image src={GoogleImage} alt="Google Image" className="mr-2 w-6 h-6" />Sign in with Google</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
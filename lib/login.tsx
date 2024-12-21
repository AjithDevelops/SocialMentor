import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { GoogleImage } from "@/public/assets";
import { Session } from 'next-auth';
import { useSession, signIn, signOut } from 'next-auth/react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleGoogleSignIn = async () => {
    localStorage.setItem('signInAttempt', 'true');
    await signIn('google', { redirect: false });
  };

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {

    const { data: session, status } = useSession();


  useEffect(() => {
    const signInAttempt = localStorage.getItem('signInAttempt');
    if (session && session.user && signInAttempt) {
      console.log('Fetching user Details');
      const userDetails = {
        googleId: (session.user as { id: string }).id,
        name: session.user.name,
        email: session.user.email,
        profileImage: session.user.image,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        roles: ['User'],
        isActive: true,
      };

      localStorage.removeItem('signInAttempt');

      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetails),
      }).then(async response => {
        if (!response.ok) {
          const errorResponse = await response.json();
          console.error('Failed to create user:', errorResponse);
          
        } else {
          console.log('User created successfully');
        }
      });
    }
  }, [session]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100" style={{zIndex:"100"}}>
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col relative">
        <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
        <div className="absolute cursor-pointer" style={{top:"16px", right:"16px"}} onClick={onClose}>
        <FaTimes  />
        </div>
        <p className="mb-4 text-center">To continue with Social Mentor</p>
        <button 
          className="bg-blue-gradient py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          onClick={handleGoogleSignIn}
        >
          <span className="flex items-center">
            <Image src={GoogleImage} alt="Google Image" className="mr-2 w-6 h-6" />
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

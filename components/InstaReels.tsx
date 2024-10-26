import { useEffect } from 'react';
import '@/app/gloal.css';

const InstagramEmbed = () => {
  useEffect(() => {
    // Load the Instagram embed script if it's not already loaded
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.addEventListener('load', () => {
        // Safely check and call Instagram's embed function
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      });
    } else {
      // Re-process the embed if script is already loaded
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <div className='flex justify-center items-center'>
      <video
        className='video-animation'
        controls
        muted
        autoPlay
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '10px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '400px',
          minWidth: '240px',
          maxHeight: '450px', 
          aspectRatio: 9 / 16, 
        }}
      >
        <source src='/assets/1024.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        className='video-animation'
        controls
        muted
        autoPlay
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '10px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '400px',
          minWidth: '240px',
          maxHeight: '450px', 
          aspectRatio: 9 / 16, 
        }}
      >
        <source src='/assets/1024.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        className='video-animation'
        controls
        muted
        autoPlay
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '10px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '400px',
          minWidth: '240px',
          maxHeight: '450px', 
          aspectRatio: 9 / 16, 
        }}
      >
        <source src='/assets/1024.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default InstagramEmbed;

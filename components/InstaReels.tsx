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
    <div className='flex justify-center items-center sm:mb-32 mb-16 gap-16'>

    {/* <video
            className='video-animation slideFadeInLeft'
            controls
            muted
            autoPlay
            loop
            style={{
            border: '0',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '10px', // Increased margin for more spacing
            maxWidth: '240px', // Further decreased width for smaller size
            minWidth: '140px', // Further adjusted minimum width
            maxHeight: '270px', // Further decreased height for smaller size
            aspectRatio: 9 / 16, 
            transform: 'rotate(0deg)', // Added rotation for angle
            }}
        >
                    <source src='/assets/1024-1.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <video
        className='video-animation slideFadeInLeft'
        controls
        muted
        autoPlay
        loop
        style={{
          border: '0',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '10px', // Increased margin for more spacing
          maxWidth: '320px', // Decreased width for smaller size
          minWidth: '200px', // Adjusted minimum width
          maxHeight: '360px', // Decreased height for smaller size
          aspectRatio: 9 / 16, 
          transform: 'rotate(0deg)', // Added rotation for angle
        }}
      >
        <source src='/assets/capcutvid1.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        className='video-animation slideFadeInRight'
        controls
        muted
        autoPlay
        loop
        style={{
          border: '0',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '10px', // Increased margin for more spacing
          maxWidth: '400px',
          minWidth: '240px',
          maxHeight: '450px', 
          aspectRatio: 9 / 16, 
          transform: 'rotate(0deg)', // Added rotation for angle
        }}
      >
        <source src='/assets/1024-1.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        className='video-animation slideFadeInUp'
        controls
        muted
        autoPlay
        loop
        style={{
          border: '0',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '10px', // Increased margin for more spacing
             maxWidth: '320px', // Decreased width for smaller size
          minWidth: '200px', // Adjusted minimum width
          maxHeight: '360px', // Decreased height for smaller size
          aspectRatio: 9 / 16, 
          transform: 'rotate(0deg)', // No rotation for the last video
        }}
      >    

      <source src='/assets/video2.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <video
        className='video-animation slideFadeInUp'
        controls
        muted
        autoPlay
        loop
        style={{
          border: '0',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '10px', // Increased margin for more spacing
             maxWidth: '240px', // Further decreased width for smaller size
          minWidth: '140px', // Further adjusted minimum width
          maxHeight: '270px', // Further decreased height for smaller size
          aspectRatio: 9 / 16, 
          transform: 'rotate(0deg)', // No rotation for the last video
        }}
      >
        <source src='/assets/1024-1.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}


    </div>
  );
};

export default InstagramEmbed;

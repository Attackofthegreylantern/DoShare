import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --sage-green: #A3B899;
          --dusty-rose: #D4A5A5;
          --muted-blue: #8FA3BF;
          --oatmeal-grey: #E8E4DF;
          --warm-white: #FAFAF8;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, .font-serif {
          font-family: 'Instrument Serif', Georgia, serif;
        }
        
        body {
          background: linear-gradient(135deg, #FAFAF8 0%, #F8F6F3 50%, #F5F3F0 100%);
          color: #3D3D3D;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom selection color */
        ::selection {
          background: rgba(163, 184, 153, 0.3);
        }
      `}</style>
      {children}
    </>
  );
}
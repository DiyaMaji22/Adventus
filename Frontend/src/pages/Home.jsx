import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
        <style>{`
            .gradient-bg {
                background: radial-gradient(ellipse at bottom, #0a1828 0%, #020a13 50%, #010508 100%);
                position: relative;
            }
            
            .gradient-bg::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: radial-gradient(ellipse at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%);
                pointer-events: none;
            }
        `}</style>
        <div className="min-h-screen gradient-bg text-white montserrat">
            <Navbar />
            
        </div>
        
    </>
    
    
  )
}

export default Home
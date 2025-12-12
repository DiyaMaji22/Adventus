import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {project_logo} from '../assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className='bg-[#060a13] px-4 md:px-8 py-4'>
      <style>{`
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -12px;
          right: -12px;
          bottom: -8px;
          background: rgba(0, 230, 255, 0.1);
          border: 1px solid rgba(0, 230, 255, 0.3);
          border-radius: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 230, 255, 0.3);
        }
        
        .nav-item:hover::before {
          opacity: 1;
        }
        
        .nav-item:hover {
          color: #00e6ff;
        }
        
        .cart-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .cart-item::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          background: rgba(0, 230, 255, 0.1);
          border: 1px solid rgba(0, 230, 255, 0.3);
          border-radius: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 230, 255, 0.3);
        }
        
        .cart-item:hover::before {
          opacity: 1;
        }
        
        .login-btn {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .login-btn::before {
          content: '';
          position: absolute;
          top: -8px;
          left: -12px;
          right: -12px;
          bottom: -8px;
          background: rgba(0, 230, 255, 0.1);
          border: 1px solid rgba(0, 230, 255, 0.3);
          border-radius: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 0 20px rgba(0, 230, 255, 0.3);
        }
        
        .login-btn:hover::before {
          opacity: 1;
        }
        
        .login-btn:hover {
          color: #00e6ff;
        }
        
        .join-btn {
          transition: all 0.3s ease;
        }
        
        .join-btn:hover {
          box-shadow: 0 0 25px rgba(0, 230, 255, 0.6), 0 0 50px rgba(0, 230, 255, 0.3);
          transform: translateY(-2px);
        }

        .mobile-menu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-menu.open {
          max-height: 600px;
        }

        @media (max-width: 768px) {
          .nav-item::before {
            display: none;
          }
        }
      `}</style>
      
      <div className='flex items-center justify-between max-w-[1400px] mx-auto'>
        
        <div className='flex items-center gap-2 md:gap-3'>
          <img src={project_logo} alt="Project Logo" className='w-8 h-8 md:w-10 md:h-10'/>
          <span className='text-white text-base md:text-xl font-bold tracking-wide'>
            TEAM <span className='text-[#00e6ff]'>AVENTUS</span>
          </span>
        </div>

       
        <button 
          className='lg:hidden text-white z-20'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>

        
        <ul className='hidden lg:flex items-center gap-8 list-none m-0 p-0 text-sm font-medium'>
          <li><Link to="/" className={`nav-item cursor-pointer relative z-10 ${location.pathname === '/' ? 'text-[#00e6ff]' : 'text-gray-400'}`}>HOME</Link></li>
          <li><Link to="/about" className={`nav-item cursor-pointer relative z-10 ${location.pathname === '/about' ? 'text-[#00e6ff]' : 'text-gray-400'}`}>ABOUT</Link></li>
          <li><Link to="/teams" className={`nav-item cursor-pointer relative z-10 ${location.pathname === '/teams' ? 'text-[#00e6ff]' : 'text-gray-400'}`}>TEAMS</Link></li>
          <li className='nav-item text-gray-400 cursor-pointer relative z-10'>PLAYERS</li>
          <li><Link to="/news" className={`nav-item cursor-pointer relative z-10 ${location.pathname.includes('/news') ? 'text-[#00e6ff]' : 'text-gray-400'}`}>NEWS</Link></li>
          <li className='nav-item text-gray-400 cursor-pointer relative z-10'>PARTNERS</li>
          <li className='nav-item text-gray-400 cursor-pointer relative z-10'>SHOP</li>
          <li className='nav-item text-gray-400 cursor-pointer relative z-10'>CAREERS</li>
          <li className='nav-item text-gray-400 cursor-pointer relative z-10'>CONTACT</li>
        </ul>

       
        <div className='hidden lg:flex items-center gap-6'>
          <div className='cart-item relative cursor-pointer z-10'>
            
            
          </div>
          <button className='login-btn text-gray-400 text-sm font-medium relative z-10'>
            LOGIN
          </button>
          <button className='join-btn bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 text-[#060a13] px-6 py-2 rounded font-bold text-sm'>
            JOIN US
          </button>
        </div>
      </div>
  
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} lg:hidden bg-[#0a0f1a] mt-4`}>
        <ul className='flex flex-col gap-4 p-4 text-sm font-medium'>
          <li><Link to="/" className={`cursor-pointer py-2 border-b border-gray-800 block ${location.pathname === '/' ? 'text-[#00e6ff]' : 'text-gray-400 hover:text-white'}`}>HOME</Link></li>
          <li><Link to="/about" className={`cursor-pointer py-2 border-b border-gray-800 block ${location.pathname === '/about' ? 'text-[#00e6ff]' : 'text-gray-400 hover:text-white'}`}>ABOUT</Link></li>
          <li><Link to="/teams" className={`cursor-pointer py-2 border-b border-gray-800 block ${location.pathname === '/teams' ? 'text-[#00e6ff]' : 'text-gray-400 hover:text-white'}`}>TEAMS</Link></li>
          <li className='text-gray-400 cursor-pointer py-2 border-b border-gray-800 hover:text-white'>PLAYERS</li>
          <li><Link to="/news" className={`cursor-pointer py-2 border-b border-gray-800 block ${location.pathname.includes('/news') ? 'text-[#00e6ff]' : 'text-gray-400 hover:text-white'}`}>NEWS</Link></li>
          <li className='text-gray-400 cursor-pointer py-2 border-b border-gray-800 hover:text-white'>PARTNERS</li>
          <li className='text-gray-400 cursor-pointer py-2 border-b border-gray-800 hover:text-white'>SHOP</li>
          <li className='text-gray-400 cursor-pointer py-2 border-b border-gray-800 hover:text-white'>CAREERS</li>
          <li className='text-gray-400 cursor-pointer py-2 border-b border-gray-800 hover:text-white'>CONTACT</li>
        </ul>
        <div className='flex flex-col gap-3 p-4'>
          <button className='text-gray-400 text-sm font-medium hover:text-white py-2 border border-gray-700 rounded'>
            LOGIN
          </button>
          <button className='bg-[#00e6ff] text-[#060a13] px-6 py-2 rounded font-bold text-sm'>
            JOIN US
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import Navbar from '../components/Navbar'
import { Gamepad2, Users, Trophy, UserPlus } from 'lucide-react'

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

        .text-gradient {
          background: linear-gradient(to right, #22d3ee, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-button {
          position: relative;
          overflow: hidden;
        }

        .glow-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.4);
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
          z-index: -1;
        }

        .glow-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(34, 211, 238, 0.15);
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
          z-index: 0;
        }

        .stat-card:hover::before {
          width: 250px;
          height: 250px;
        }

        .stat-card > * {
          position: relative;
          z-index: 1;
        }
      `}</style>

      
      <div className="gradient-bg text-white montserrat">
        <Navbar />
        
       
        <div className="flex flex-col items-center justify-center px-4 pt-32 pb-20">
          
         
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              VCT Challengers 2024 Champions
            </span>
          </div>

         
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-center">
            <span className="text-gradient">
              DOMINATE
            </span>
            <br />
            <span className="text-white">THE GAME</span>
          </h1>

         
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl leading-relaxed text-center">
            Professional esports organization competing at the highest level. Join
            the legacy of champions and become part of our winning team.
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button className="group px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 uppercase text-sm tracking-wide">
              APPLY NOW
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold rounded-md transition-all duration-300 uppercase text-sm tracking-wide">
              VIEW TEAMS
            </button>
          </div>
        
         
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full mt-12">
            
            
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <Gamepad2 size={40} strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-gray-400 text-sm font-medium">Active Teams</div>
            </div>

            
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">12</div>
              <div className="text-gray-400 text-sm font-medium">Content Creators</div>
            </div>

           
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <Trophy size={40} strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">23</div>
              <div className="text-gray-400 text-sm font-medium">Tournaments Won</div>
            </div>

           
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-cyan-400/30 hover:bg-slate-900/40 transition-all duration-300 group">
              <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <UserPlus size={40} strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-400 text-sm font-medium">Community</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
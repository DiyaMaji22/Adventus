import React from 'react'
import Navbar from '../components/Navbar'
import { Gamepad2, Users, Trophy, UserPlus } from 'lucide-react'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { Calendar } from 'lucide-react'
const Home = () => {
  
    const teams = [
    {
      id: 1,
      game: 'VALORANT',
      category: 'FPS',
      description: 'Our VALORANT roster competes at the highest level, showcasing tactical excellence and...',
      players: 5,
      logo: 'V'
    },
    {
      id: 2,
      game: 'League of Legends',
      category: 'MOBA',
      description: 'Dominating the Rift with strategic gameplay and team synergy.',
      players: 2,
      logo: 'L'
    },
    {
      id: 3,
      game: 'Counter-Strike 2',
      category: 'FPS',
      description: 'Precision aim and tactical excellence in Counter-Strike.',
      players: 0,
      logo: 'C'
    }
  ];
const newsItems = [
    {
      id: 1,
      category: 'TOURNAMENT',
      date: 'Jan 21, 2024',
      title: 'Team Aventus Wins VCT Challengers 2024',
      description: 'Our VALORANT roster dominates the competition to claim the championship title.',
      categoryColor: 'bg-purple-500'
    },
    {
      id: 2,
      category: 'ANNOUNCEMENT',
      date: 'Jan 18, 2024',
      title: 'Team Aventus Announces New Partnership with TechGear',
      description: 'Exciting new sponsorship deal brings premium gaming peripherals to our players.',
      categoryColor: 'bg-purple-500'
    },
    {
      id: 3,
      category: 'ROSTER',
      date: 'Jan 10, 2024',
      title: 'Roster Update: New Talent Joins the Family',
      description: 'Welcoming our newest players to the Team Aventus roster.',
      categoryColor: 'bg-purple-500'
    }
  ];
  
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
        <div className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-cyan-400">Teams</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Competing at the highest level across multiple titles
            </p>
          </div>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all px-6 py-3 rounded-lg flex items-center gap-2 font-semibold uppercase text-sm tracking-wider">
            View All Teams
            <ArrowRight size={18} />
          </button>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.id}
              className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all group"
            >
             
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-400/30">
                    {team.category}
                  </span>
                </div>
                <div className="text-8xl font-bold text-slate-700/30 group-hover:text-slate-600/30 transition-colors">
                  {team.logo}
                </div>
              </div>

              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{team.game}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {team.description}
                </p>

                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users size={16} />
                    <span>{team.players} Players</span>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold text-sm group">
                    View Team
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="bg-slate-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="text-cyan-400">News</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with our latest announcements and victories
            </p>
          </div>
          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition-all px-6 py-3 rounded-lg flex items-center gap-2 font-semibold uppercase text-sm tracking-wider">
            View All News
            <ArrowRight size={18} />
          </button>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all group"
            >
             
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="absolute top-4 left-4">
                  <span className={`${news.categoryColor} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase`}>
                    {news.category}
                  </span>
                </div>
                <div className="text-7xl font-bold text-slate-700/20 group-hover:text-slate-600/20 transition-colors">
                  NEWS
                </div>
              </div>

             
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>

               
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {news.title}
                </h3>

                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {news.description}
                </p>

               
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold text-sm group">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react'

const ExtendedNews = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const newsDetails = {
    1: {
      category: 'TOURNAMENT',
      title: 'Team Aventus Wins VCT Challengers 2024',
      date: 'Jan 21, 2024',
      intro: 'In an electrifying grand finals match, Team Aventus emerged victorious against Rival Esports to claim the VCT Challengers 2024 championship.',
      content: [
        'The team showed incredible coordination and individual skill throughout the tournament, dropping only two maps in the entire competition.',
      ],
      matchHighlights: 'Phoenix led the scoreboard with a tournament-high 287 ACS, while Sage\'s clutch plays in crucial rounds proved decisive.',
      quote: '"This victory is a testament to our hard work and dedication. We\'re just getting started." - Coach_Pro',
      tags: ['VALORANT', 'VCT', 'Championship'],
      categoryColor: 'bg-purple-500'
    },
    2: {
      category: 'ANNOUNCEMENT',
      title: 'Team Aventus Announces New Partnership with TechGear',
      date: 'Jan 18, 2024',
      intro: 'We are thrilled to announce an exciting new partnership between Team Aventus and TechGear, a leading manufacturer of premium gaming peripherals.',
      content: [
        'TechGear will be providing our players with state-of-the-art gaming equipment, including high-performance mice, mechanical keyboards, and professional-grade headsets.',
        'This partnership ensures our players have access to the best tools available to compete at the highest level.',
      ],
      matchHighlights: 'Our roster will benefit from TechGear\'s latest innovations in gaming technology, giving them a competitive edge in tournaments.',
      quote: '"We\'re excited to partner with TechGear to bring the best equipment to our players." - Team Manager',
      tags: ['Partnership', 'TechGear', 'Announcement'],
      categoryColor: 'bg-purple-500'
    },
    3: {
      category: 'ROSTER',
      title: 'Roster Update: New Talent Joins the Family',
      date: 'Jan 10, 2024',
      intro: 'Team Aventus is excited to welcome new talent to our competitive roster. After an extensive scouting and tryout process, we\'ve identified exceptional players.',
      content: [
        'Our new players bring fresh perspectives and unique skill sets that complement our existing roster perfectly.',
        'Each new member has demonstrated not only exceptional mechanical skill but also the teamwork and communication abilities essential for success.',
      ],
      matchHighlights: 'The new players have already begun integrating with the team, participating in practice sessions and strategy meetings.',
      quote: '"We\'re confident these additions will help us achieve our goals." - Head Coach',
      tags: ['Roster', 'Team Update', 'New Players'],
      categoryColor: 'bg-purple-500'
    }
  }

  const article = newsDetails[id] || newsDetails[1]

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

        .tag-badge {
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid rgba(100, 116, 139, 0.3);
          transition: all 0.3s ease;
        }

        .tag-badge:hover {
          border-color: rgba(34, 211, 238, 0.5);
          color: #22d3ee;
        }
      `}</style>

      <div className="gradient-bg text-white min-h-screen">
        <Navbar />
        
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">
          <button 
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to News
          </button>

          <div className="relative h-96 bg-linear-to-br from-teal-900/40 via-slate-800/40 to-purple-900/40 rounded-xl flex items-center justify-center mb-12 overflow-hidden">
            <div className="text-8xl font-bold text-slate-600/40 tracking-wider">
              {article.category}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {article.intro}
              </p>

              {article.content.map((paragraph, index) => (
                <p key={index} className="text-gray-400 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}

              <div className="bg-slate-800/30 border-l-4 border-cyan-400 p-6 rounded-r-lg mb-8">
                <h3 className="text-cyan-400 font-bold mb-3 uppercase text-sm tracking-wider">
                  Match Highlights
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {article.matchHighlights}
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg mb-8">
                <p className="text-gray-300 italic leading-relaxed">
                  {article.quote}
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="tag-badge px-4 py-2 rounded-full text-sm text-gray-400 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ExtendedNews

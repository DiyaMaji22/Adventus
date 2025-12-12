import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx' 
import Teams from './pages/Teams.jsx'
import News from './pages/News.jsx'
import ExtendedNews from './pages/ExtendedNews.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<ExtendedNews />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import defaultTheme from './themes/default'
import About from './pages/About'
import { useEffect } from 'react'
import WhitePaper from './pages/WhitePaper'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tokenomics from './pages/Tokenomics'
import Founders from './pages/Founders'
import RoadMap from './pages/RoadMap'
import Osm from './pages/Osm'
import Nft from './pages/Nft'
import Footer from './components/Footer'

function App() {
  // const [showscroll, setShowScroll] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='app'>
        <Header />
        {/* Header */}
        {/* Home */}
        <Home />
        {/* About */}
        <About />
        {/* White paper */}
        <WhitePaper />
        {/* Tokenomics */}
        <Tokenomics />
        {/* Founders */}
        <Founders />
        {/* Road Map */}
        <RoadMap />
        {/* Get Osm */}
        <Osm />
        {/* Nft */}
        <Nft />
        {/* Footer */}
        <Footer />
        <CssBaseline />
      </div>
    </ThemeProvider>
  )
}

export default App


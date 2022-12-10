import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/Header'
import Home from './pages/Home'
import defaultTheme from './themes/default'
import About from './pages/About'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Tokenomics from './pages/Tokenomics'
import Founders from './pages/Founders'
import RoadMap from './pages/RoadMap'
import Osm from './pages/Osm'
import Nft from './pages/Nft'
import Footer from './components/Footer'
import Wallets from './pages/Wallets'

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
        {/* Tokenomics */}
        <Tokenomics />
        {/* Wallets */}
        <Wallets />
        {/* Road Map */}
        <RoadMap />
        {/* Get Osm */}
        <Osm />
        {/* Nft */}
        <Nft />
        {/* Founders */}
        <Founders />
        {/* Footer */}
        <Footer />
        <CssBaseline />
      </div>
    </ThemeProvider>
  )
}

export default App


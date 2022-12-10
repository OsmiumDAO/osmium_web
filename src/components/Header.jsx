import React, { useState } from 'react'
import './css/Header.css'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Container,
  Link,
} from '@mui/material'
import { ImMenu } from 'react-icons/im'
import darkLogo from '../assets/logo_dark.png'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import whitePaper from '../assets/white_paper.pdf'
const pages = [
  'Home',
  'About',
  'Tokenomics',
  'Wallets',
  'Roadmap',
  'Get OSM',
  'NFT',
  'Contributors',
]

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='sticky' className='header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box
            sx={{ gap: '15px', display: { xs: 'none', md: 'flex' } }}
            className='brand'
          >
            <Link href='#home'>
              <img src={darkLogo} alt='' className='logo' />
            </Link>
            <Typography
              variant='h6'
              className='brandname'
              noWrap
              component='div'
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              OSMIUM-DAO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <ImMenu />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={`#${page.toLocaleLowerCase()}`}>
                    <Typography textAlign='center'>{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link href={whitePaper} download>
                  <Typography textAlign='center'>White Paper</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant='h6'
            className='brandname'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            OSMIUM-DAO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              flexWrap: 'wrap',
            }}
          >
            {pages.map((page, i) => (
              <Link href={`#${page.toLocaleLowerCase()}`}>
                <Button
                  key={page + i}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Link href={whitePaper} download>
              <Button startIcon={<FaCloudDownloadAlt />} className='btn'>
                Paper
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

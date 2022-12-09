import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#030412',
      dark: '#504E67',
      light: '#171150',
    },
    secondary: {
      main: '#FD295A',
    },
    background: {
      default: '#F8F9FD',
      white: '#FBFBFE',
    },
  },

  typography: {
    fontFamily: "'Poppins', Roboto, Helvetica, Arial, sans-serif",
  },

  appBar: {
    background: '#171150',
    color: '#1E1E1E',
  },
})

export default theme

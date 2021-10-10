import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#9c4b04'
    },
    secondary: {
      main: '#303f9f'
    },
    white: {
      main: '#fff'
    },
    error: {
      main: '#f44336'
    },
    success: {
      main: '#4caf50'
    },
    background: {
      paper: '#fbe9e7'
    }
  }
})
export default theme

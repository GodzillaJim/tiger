import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import { ThemeProvider } from '@material-ui/core'
import './App.css'
import theme from './theme/theme'
import TopBar from './components/TopBar'

function App () {
  return (
        <ThemeProvider theme={theme}>
            <Paths/>
        </ThemeProvider>
  )
}

const Paths = () => {
  const [summary, openSummary] = React.useState(false)
  const [menu, setMenu] = React.useState(false)
  React.useEffect(() => {
    if (summary) {
      if (window.innerWidth > 720) {
        // TODO: Make drawer visible on large screens
      }
    }
  })
  return <BrowserRouter>
        <div>
            <div className={'row'}>
                <TopBar menu={menu} summary={summary} handleCloseMenu={setMenu}
                        handleOpenSummary={openSummary}/>
            </div>
            <Routes className={'row'}>
                <Route path={'/'}
                       element={<HomeScreen menu={menu} summary={summary}/>}/>
            </Routes>
        </div>
    </BrowserRouter>
}
export default App

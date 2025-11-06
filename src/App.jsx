
import './App.css'
import Home from './page/Home.jsx'
import theme from './Theme/theme.js' 
import { ThemeProvider } from '@mui/material'
function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
    </>
  )
}

export default App

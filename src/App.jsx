
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './page/Home.jsx'
import theme from './Theme/theme.js'
import { ThemeProvider } from '@mui/material'
import CourseDetail from './page/CourseDetail.jsx'
function App() {


  let route = createBrowserRouter([
    { index: true, element: <Home /> },
    { path: "/courses/:id", element: <CourseDetail /> },

  ])


  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={route}/>
      </ThemeProvider>
    </>
  )
}

export default App

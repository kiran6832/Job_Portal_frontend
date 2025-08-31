import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './compontents/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import Jobs from './pages/Jobs'
import Footer from './compontents/Footer'
import JobDescription from './pages/JobDescription'
const App = () => {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/register' element={<Register/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/jobDes' element={<JobDescription/>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
   
  )
}

export default App
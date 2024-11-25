
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import NewBoard from './components/NewBoard'

function App() {
const [category,setCategory]=useState("general")
  return (
    <>
        <Navbar  setCategory={setCategory} />
        <NewBoard category={category} />
    </>
  )
}

export default App

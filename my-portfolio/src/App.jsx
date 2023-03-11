import { useState } from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import  {ContactMe}  from './components/ContactMe'
import SendMail from "./components/ContactMe"
import EmailForm from './components/ContactMe'
import emailjs from "emailjs-com";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="hidden">
        
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <EmailForm/>
        
      </div>
    </div>
  )
}

export default App

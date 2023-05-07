import { useState } from 'react'
import Header from './components/Header'
import Bio from './components/Bio'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import  {HiddenElements}  from './components/app'
// import  {ContactMe}  from './components/ContactMe'
import SendMail from "./components/ContactMe"
import EmailForm from './components/ContactMe'
import emailjs from "emailjs-com";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="hidden"> */}
    <div className='show'>
    <div className="App">
      
        {/* <HiddenElements> */}
      <Header/>
      <Bio/>
      <Skills/>
      <Projects/>
      <EmailForm/>
      {/* </HiddenElements> */}
        
    </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import { CreateCV, EditCV } from './components/Buttons'
import DisplayCV from './components/DisplayCV'

function App() {
  return (
    <>
        <h1>CV Builder</h1>
        <div id="inputCV">
            <fieldset>
                <Personal />
            </fieldset>
            <fieldset>
                <Education />
                <button>add</button>
            </fieldset>
            <fieldset>
                <Experience />
                <button>add</button>
            </fieldset>
        </div>
        <button onClick={CreateCV} >Create</button>
        <button onClick={EditCV} >Edit</button>
        <div id="displayCV">
            <DisplayCV />
        </div>
    </>
  )
}

export default App

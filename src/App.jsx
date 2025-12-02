import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Work from './components/Work'
import Resume from './components/Resume'
import { CreateCV, EditCV } from './components/Buttons'
import DisplayCV from './components/DisplayCV'

import { blank } from './data'

export default function App() {
    const [personalData, setPersonalData] = useState(blank.personal)

  return (
    <>
        <h1>CV Builder</h1>
        <div id="inputCV">
                <Personal handleUpdate={setPersonalData} data={personalData} />
                <Education />
                <Work />
        </div>
        {/* <button onClick={CreateCV} >Create</button>
        <button onClick={EditCV} >Edit</button>
        <div id="displayCV">
            <DisplayCV />
        </div> */}
        <Resume
            personalData={personalData}
        />
    </>
  )
}


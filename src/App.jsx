import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Work from './components/Work'
import Resume from './components/Resume'
import List from './components/ListText'

import { blank } from './data'

export default function App() {
    const [personalData, setPersonalData] = useState(blank.personal)
    const [educationData, setEducationData] = useState(blank.education)
    const [workData, setWorkData] = useState(blank.work)
    const [listData, setListData] = useState(blank.list)

  return (
    <>
    <h1>CV Builder</h1>
    <div className="container">
        <div id="inputCV">
                <Personal handleUpdate={setPersonalData} data={personalData} />
                <Education handleUpdate={setEducationData} data={educationData} />
                <Work handleUpdate={setWorkData} data={workData} />
                <List handleUpdate={setListData} data={listData} />
        </div>
        <Resume
            personalData={personalData}
            educationData={educationData}
            workData={workData}
        />
    </div>
    </>
  )
}


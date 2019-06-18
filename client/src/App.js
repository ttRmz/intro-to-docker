import React from 'react'
import logo from './logo.svg'
import { Student } from './Student'
import './App.css'

function App() {
  const [students, setStudents] = React.useState([])
  React.useEffect(() => {
    fetch('http://localhost:8888/students').then(res =>
      res.json().then(data => setStudents(data)),
    )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{`${students.length} student${
          students.length > 1 ? 's' : ''
        } found.`}</h3>
        <div className="student__group">
          {students.map(data => (
            <Student key={data._id} data={data} />
          ))}
        </div>
      </header>
    </div>
  )
}

export default App

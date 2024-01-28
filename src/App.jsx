import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Paraph() {
  
  return(
    <div>
      <h1>BIODATA PERUSAHAAN</h1>
      <ul>
        <li>Nama : Halur's Group</li>
        <li>Bidang : Education</li>
        <li>Tagline : Education</li>
        <li>Bidang : Education</li>
      </ul>
    </div>
  )
}

function Contacts(){
  const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
  
  return (
    <ol className="contacts">
      {names.map((names) => (
        <li>{names}</li>
        )
        )}
    </ol>
  )
}

export default function App() {
  return (
    <div className="App">
      <Paraph />
    </div>
  )
}

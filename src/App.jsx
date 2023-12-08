import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Personagens = ({ props }) => {
  const personagens = [
    'Jill Valentine',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
  ];
  const personagensFamilia = personagens.filter(personagem =>
    personagem.includes(props));
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
      {personagensFamilia.map(personagem => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  )
}
function App() {


  return (
    <>
       <div>
      <Personagens props="Redfield" />
    </div>
    </>
  )
}

export default App
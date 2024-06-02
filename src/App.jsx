import React from 'react'
import './App.css'
import DivEspeciales from './DivEspeciales'
import DivOponentes from './DivOponentes'
import DivPersonajes from './DivPersonajes'
import { MyContextProvider } from './Context';
import { MyContextProviderEsp } from './ContextEspeciales';

function App() {
    
  return (
    <MyContextProviderEsp>
    <MyContextProvider>
      <div id='body'>
        <DivOponentes/>
        <DivPersonajes/>
        <DivEspeciales/>
      </div>
    </MyContextProvider>
    </MyContextProviderEsp>
  )
}

export default App

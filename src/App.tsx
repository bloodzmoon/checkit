import React from 'react'
import { Key } from './components/Key'

function App() {
  return (
    <div>
      Hello world
      <Key size="1">A</Key>
      <Key size="1.25">cmd</Key>
      <Key size="1.5">TAB</Key>
      <Key size="1.75">Caps Lock</Key>
      <Key size="2.25">Shift</Key>
      <Key size="2.75">Shift</Key>
      <Key size="6.25">Space</Key>
    </div>
  )
}

export default App

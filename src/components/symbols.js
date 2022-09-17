import React from "react"
import symbolsRow from '../assets/symbols.svg'
import '../style.css'

export default function Symbols() {
  return <div id="symbolsDiv">

    <img id="symbols" src={symbolsRow} alt="symbols" width="90%"/>    
    
  </div>
}
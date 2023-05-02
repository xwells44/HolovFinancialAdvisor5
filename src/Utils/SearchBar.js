import React from 'react'
import {IoIosSearch} from "react-icons/io"
import '../Asset/style/input.sass';
export default function SearchBar({nodeRef, handleInput, placeholder}) {
  return (
    <div className='inputContainer'>
    <div  className='iconInputContainer'>
        <IoIosSearch className="iconInput"/>
    </div>
        <input className='inputContent' ref={nodeRef} onInput={handleInput} placeholder={placeholder}></input>
    </div>
  )
}

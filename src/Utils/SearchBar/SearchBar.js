import { findAllByAltText } from '@testing-library/react';
import React, {useState, useEffect, useRef} from 'react';
import {IoIosSearch} from "react-icons/io"
const allPerson = [
 
        {
          id: crypto.randomUUID(),
          name: "Daphney",
          age: 23
        },
        {
          id: crypto.randomUUID(),
          name: "Xavier",
          age: 23
        },
        {
          id: crypto.randomUUID(),
          name: "Jacob",
          age: 26
        },
        {
          id: crypto.randomUUID(),
          name: "Benoit",
          age: 18
        },
        {
          id: crypto.randomUUID(),
          name: "Audrey",
          age: 48
        },
        {
          id: crypto.randomUUID(),
          name: "Anne-Marie",
          age: 50
        },
        {
          id: crypto.randomUUID(),
          name: "Éric",
          age: 53
        },
        {
          id: crypto.randomUUID(),
          name: "Frederic",
          age: 52
        }

      
]
export default function SearchBar() {
    const inputValue = useRef(null)
    const [value, setValue] = useState("");

    const handleInput = () =>{
        const value = inputValue.current.value
        setValue(value)
    }
    const search =(item)=>{
      const specialCharacters = ["é","à","Ë","ê","â","è"]
      const lowerCase =  item.name.toLowerCase().includes(value.toLowerCase().trim())
      const upperCase =  item.name.toUpperCase().includes(value.toUpperCase().trim())
      const strWithAccent = item.name.includes(specialCharacters.forEach((item)=>item.toLowerCase()||item.toUpperCase()))
      const find = lowerCase || upperCase
      return {strWithAccent, find}
    }

  return (
    <>
    <div className='inputContainer'>
    <div  className='iconInputContainer'>
        <IoIosSearch className="iconInput"/>
    </div>
        <input className='inputContent' ref={inputValue} onInput={handleInput} placeholder="Entrer le nom de l'action ici"></input>
    </div>
    <div className={value.length ? 'containerResultInputOpen' : "containerResultInputClose"}>
      {allPerson.filter(item => search(item).find || search(item).strWithAccent).map((item ,index)=>{
        return (
            <div key={item.id}>
            <span>{item.name} </span>
            <span>{item.age} </span>
           </div>
        )
      })}
    </div>
    </>
  )
}


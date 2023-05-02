import React, {useState, useEffect, useRef} from 'react';
import SearchBar from '../../Utils/SearchBar';
import "../../Asset/style/input.sass"
import { search } from './Function/search';
export default function SearchStockBar() {
    const inputValue = useRef(null)
    const [value, setValue] = useState("");
    const [matches, setMatches] = useState([])
    
  useEffect(()=>{
    const url = `https://alpha-vantage.p.rapidapi.com/query?keywords=${value}&function=SYMBOL_SEARCH&datatype=json`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7e32d851d2msh4bfd19ff4c2d636p179652jsn4bf6efa6b631',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
   async function getData(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
         setMatches(result.bestMatches.map((item, index)=>({
         id: crypto.randomUUID(), 
         stockName: item["1. symbol"],
         companyName: item["2. name"],
         localisation: item["4. region"],
          })))     
    } catch (error) {
        console.error(error);
    }
   }
  getData()
  },[value, matches])
    const handleInput = () =>{
        const value = inputValue.current.value
        setValue(value)
    }
  

  return (
    <>
    <SearchBar nodeRef={inputValue} handleInput={handleInput} placeholder={"Entrer le nom de l'action ici"}/>
    <div className={value.length ? 'containerResultInputOpen' : "containerResultInputClose"}>
      {matches.filter(item => search(item, value).findStockName || search(item, value).strWithAccent || search(item, value).findCompanyName).map((item ,index)=>{
        return (
            <div key={item.id} className='resultSectionContainer'>
            <div className='resultSectionDiv'>
            <span>{item.stockName} </span>
            </div>
            <div className='resultSectionDiv'>
            <span>{item.companyName} </span>
            </div>
            <div className='resultSectionDiv'>
            <span>{item.localisation} </span>
            </div>
           </div>
        )
      })}
    </div>
    </>
  )
}

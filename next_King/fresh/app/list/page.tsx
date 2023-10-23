'use client'

import { useState } from 'react'

export default function List() { 
  let items = ['Tomatoes', 'Pasta', 'Coconut']
  let [num, setNum] = useState([0, 0, 0]) // client component에서만 사용가능
  return (
      <div>
        <h1 className="title"> 상품 목록 </h1>
        
        {/* <span>{num[0]}</span>
        <button onClick={()=>{ 
            let copy = [...num];
            copy[0]++
            setNum(copy) 
          }}>+</button>
      
        <span>{num[1]}</span>
        <button>+</button>        
        <span>{num[2]}</span>
        <button>+</button> */}
        
        {
          items.map((a, i)=>{
            return (
              <div className="food" key={i}>
                <img src={ `food${i}.png` } className="food-img"/>
                <h4> { a } $40 </h4>
                <span> { num[i] } </span>
                <button onClick={()=>{ 
                  let copy = [...num];
                  copy[i]++
                  setNum(copy) 
                  }}> + </button>
                <button onClick={()=>{ 
                  let copy = [...num];
                  copy[i]--
                  setNum(copy) 
                  }}> - </button>
              </div>
            )
          })
        }  
      </div>
    )
  }
  
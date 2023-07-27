import { useState } from "react"

export const ItemCount = ({stock,onAdd}) =>{
    const[count, setCount]= useState(1)
    const handleSub= ()=>{
        if(count>1)setCount(count-1)
    }
    const handleSum= ()=>{
        if(stock>count)setCount(count+1)
    }
   
  
   
   
    return(
        <div>
            <div>
            <button onClick={()=>(handleSub())}  className="btn btn-secondary m-4">-</button>
           <span>{count}</span>
            <button onClick={()=>(handleSum())}  className="btn btn-secondary m-4">+</button>

            </div>
            <div>
                <button disabled={!stock} onClick={()=>onAdd(count)}  className="btn btn-secondary m-4">agregar carrito</button>
            </div>
        </div>

    )
   


}
import React from 'react';
import "./List.css"

export default function List(props) {
  const deleteItem=(key)=>{
    console.log(key);
    const fill=props.item.filter((i)=>{
      return i.key!==key;
    })
    props.updateList(fill);
  }
  return <div className='list'>
     {props.item.map((i)=>{
         return(
          <div className='item'> 
         <p>{i.name}</p>
         <button onClick={()=>deleteItem(i.key)}>x</button>
         </div>
          )
     })}
  </div>;
}

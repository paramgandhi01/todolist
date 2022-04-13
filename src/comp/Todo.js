import React from 'react';
import { useState } from 'react';
import "./Todo.css"
import List from "./List";

export default function Todo() {
    const[currentItem,setCurrentItem]=useState("");
    const[listItem,updateList]=useState([]);
    function handle(e){
        setCurrentItem(e.target.value )
        // console.log("item",currentItem);   
    }
    const handleclick=()=>{
        updateList([...listItem,{name:currentItem,key:Date.now()}])
        console.log("list",listItem);
        setCurrentItem("")
    }
  return <div className='wrapper'>
      <div className='input-wrapper'>
    <input type="text" value={currentItem} onChange={handle}/>
    <button onClick={handleclick}>+</button>
      </div>
      <List item={listItem} updateList={updateList}/>
  </div>;
}


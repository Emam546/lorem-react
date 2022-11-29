import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs,setParagraphs]=useState(data)
  const [curr,setCurr]=useState([])
  function handelSubmit(e){
    e.preventDefault()
    const formData=new FormData(e.target)
    const data=[...formData.values()]
    const count =Math.max(parseInt(data[0])||1,1)
    console.log(count);
    const indexs=[]
    while (indexs.length<count){
        if(paragraphs.length===indexs.length)
            break
        const num=Math.floor(Math.random()*paragraphs.length)
        if(!indexs.includes(num))
            indexs.push(num)
    }
    setCurr(indexs.map((i)=>paragraphs[i]))
  }
  return <section className='section-center'>
    <h1>tired of boring lorem ipsum</h1>
    <form className='lorem-form' onSubmit={handelSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount"/>
        <button type="submit" className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
          {curr.map((text,i)=>{
              return <p key={i}>{text}</p>
          })}
    </article>
  </section>
}

export default App;

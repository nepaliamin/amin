import React, { useState } from 'react'

function products({amin}) {
  const [a,b] = useState(true);
  return (
    <div>
      <div className='h-96 bg-zinc-800'>products is<br/> 
    my name is {amin.name}<br/>
    my age is {amin.age}<br/>
    my symbol number is {amin.symbol}</div>
      
<div className='w-1/4 bg-purple-800'>
  this is a success.
  <h4 className={`${a === false ? "text-red-600" : "text-green-600"}`}>{a === false ? "hello" : "hey"}</h4>
  <button className='bg-yellow-500 py-1 px-2 border border-zinc-000' onClick={()=>b(!a) }>click</button>
<br/>
</div>




  
  </div>
  )

}

export default products
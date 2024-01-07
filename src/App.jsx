import React, { useState } from 'react';
import Products from './products';  // Assuming that the component is named Products
          // Assuming that the component is named Test

function App() {
var[a,b] = useState(69);

  return (
    <div className='w-full h-screen bg-zinc-900 p-4 text-white'>
      <div className='w-44 h-32 rounded-xl bg-red-600 text-white'>
        <h3>hello!</h3>
      </div>

      <Products amin={{name:"amin", age: 22 , symbol: 78214007}} />


      <div className='h-1/2 w-1/2 bg-zinc-500'>
        <h1>this is a number {a} </h1>
        <h2>do you want to <br />update? If yes click here <br /> </h2>
        
        <button className='bg-green-500 py-1 px-2 border border-zinc-000' onClick={()=>b(a+1) }>click</button>
      </div>
      
    </div>
  );
}

export default App;

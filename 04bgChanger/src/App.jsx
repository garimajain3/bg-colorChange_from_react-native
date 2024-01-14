import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("blue")

  return (

    <>
      <div className='w-screen h-screen duration-200' 
      style={{background:color}}
      >
        <div className='fixed flex flex-wrap justify-center  px-2 bottom-12 inset-x-0'>
        <div className='flex flex-wrap gap-4 justify-center px-3 py-3 rounded-3xl bg-white'>
        <button onClick={()=>setColor("red")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"red"}}>
          Red
        </button>

        <button onClick={()=>setColor("pink")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"pink"}}>
          Pink
        </button>
        <button onClick={()=>setColor("yellow")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"yellow"}}>
          Yellow
        </button>
        <button onClick={()=>setColor("orange")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"orange"}}>
          Orange
        </button>
        <button onClick={()=>setColor("green")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"green"}}>
          Green
        </button>
        <button onClick={()=>setColor("black")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"black"}}>
          Black
        </button>
        <button onClick={()=>setColor("purple")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"purple"}}>
          Purple
        </button>
        <button onClick={()=>setColor("violet")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"violet"}}>
          Violet
        </button>
        <button onClick={()=>setColor("brown")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"brown"}}>
          Brown
        </button>
        <button onClick={()=>setColor("olive")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"olive"}}>
          Olive
        </button>
        <button onClick={()=>setColor("lavender")}
        className='outline-none rounded-full shadow-2xl px-4 py-1 text-white '
        style={{backgroundColor:"lavender"}}>
          Lavender
        </button>

        </div>
        </div>
      
      </div>
    </>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // useState Hook
  const [count, setCount] = useState(0)
  const [name, setName] = useState("JanoiBJR");

  // useEffect Hook
  useEffect(() => {
    document.title = `You click ${count} times`;
  }, [count]);

  // Lifecycle ของ useEffect
  // 1. Mounting
  // 2. Updating
  // 3. Unmounting

  useEffect(() => {
    const handleResize = () => {
      console.log('Window resize');
    }
    
    window.addEventListener('resize' , handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>เพิ่ม</button>
      <button onClick={() => setCount(count - 1)}>ลด</button>
      <br />
      <h2>Name: {name}</h2>
      <button onClick={() => setName("Apichat")}>เปลี่ยนชื่อ</button>
    </>
  )
}

export default App

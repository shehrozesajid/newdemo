import React,{useEffect,useState} from 'react'
import "./App.css"; //

function Header() {
   let [time,settime]=useState(new Date().toLocaleTimeString('en-US', { hour12: true }));
    useEffect(()=>{
      let timer=setInterval(()=>{
        settime(new Date().toLocaleTimeString('en-US', { hour12: true }))
      },1000)
      return ()=> clearInterval(timer)
    },[])
  useEffect(()=>{
      console.log(new Date());
  },[])
    
  return (
    <div>
      
         <header>
          
            <div id='a1'>
            <img id='a2' src="Logo.jpg" alt="" />
            <h1 id='a3'>RS Skills Hub</h1>
            <div id='a33'>
               <h1>current time</h1>
               <h1>{time}</h1>
            </div>
         </div>
         
         </header>
    </div>
  )
}

export default Header
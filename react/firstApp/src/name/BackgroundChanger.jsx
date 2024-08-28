import "./Bg.css"
import { useState } from "react"

const BackgroundChanger = () => {
  const [color,setColor]=useState("white");
  const changeColor=(color)=>{
    setColor(color)
  }

  
 return (
    <>
      <div className="main" style={{backgroundColor:color}}>

      </div>
      <div className="button">
        <button onClick={()=>changeColor("red")}> Red</button>
        <button onClick={()=>changeColor("blue")}> Blue</button>
        <button onClick={()=>changeColor("Black")}> Black</button>
        <button onClick={()=>changeColor("yellow")}> Yello</button>
        <button onClick={()=>changeColor("green")}> Green</button>
        <button onClick={()=>changeColor("green")}> Disco</button>
        <button onClick={()=>changeColor("")}> Reset</button>
      </div>

    </>
  )
}
export default BackgroundChanger




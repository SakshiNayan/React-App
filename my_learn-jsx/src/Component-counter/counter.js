import { useState } from "react"
import './counter.css';


const Counter=()=>{
    //function 
    const[counter,setCounter]=useState(1);

    const handleDecreament=()=>{
        if(counter>0)
        setCounter(counter-1);
    }

    const handleIncreament=()=>{
        // setCounter(counter+1);
        // setCounter(counter+1);
        setCounter((prev)=>{
            return prev+1;
        });
        setCounter((prev)=>{
            return prev+1;
        });
    }
    return(
        <div >
            <button className="display" onClick={handleIncreament}>Increament</button>
            <div className="display" id="counter">{counter}</div>
            <button className="display" onClick={handleDecreament}>Decreatment</button>
        </div>
    )
    
}
export default Counter;
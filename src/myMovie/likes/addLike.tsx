import React,{useState} from "react"
import{AiOutlineLike} from "react-icons/ai"
import{AiFillDislike} from "react-icons/ai"
import Button from 'react-bootstrap/Button';





export default function Counter(){
    const[count,setCount]= useState(0)

    return(
        <div>
            <p>you have {count} likes</p>
        <Button onClick={()=>setCount(count+1)} ><AiOutlineLike/></Button>
        <Button onClick={()=>setCount(count-1)} ><AiFillDislike/></Button>
        </div>

        
    )
}



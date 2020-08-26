import React, { useState } from 'react';
import Card from "react-bootstrap/Card"
import moviesData from '../jsonData/movies.json'
import AiFillStar from "../myMovie/Rank/rank"
import Counter from "../myMovie/likes/addLike"
import Button from 'react-bootstrap/Button'


interface jsonData{
        Poster:string,
        Year?:number,
        imdbID?:string,
        Type?:string,
        title:string,
        rank?:number,
        
        
    }

export  function CreateCard(props:jsonData){
    const[bgc,setColor]= useState('')


    const {Poster,Year,imdbID,Type,title,rank} = props
                return <Card  style={{width:'18rem', backgroundColor:bgc}}>
                         <Card.Img variant="top" src={Poster} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {Type}
                                </Card.Text>
                                <Card.Text>
                                    {Year}
                                </Card.Text>
                                <Card.Text>
                                    {rank}
                                </Card.Text>
                                <Counter/>
                                <AiFillStar stars={rank} />

                                {/* <Button variant="primary">Go somewhere</Button> */}
                                <Button onClick={()=>
                                {if(bgc==="yellow"){
                                    setColor('')
                                }

                                else{
                                    setColor('yellow')
                                }
                                
                                } 
                            }>changeColor</Button>
                                                                
                            </Card.Body>
                            
                            
                </Card>
    // console.log(createCard());
    
    
}



export default function GetCards(): any {
    
    return <div className ='row'>
        {moviesData.map((item: any) => {return <CreateCard Poster={item.Poster} title={item.Title} Year={item.Year} imdbID={item.imdbID} Type={item.Type} rank={item.rank} />})}
    </div>
    // console.log(movies);
    
    

}
import React from "react"
import { AiFillStar } from "react-icons/ai";


interface IProps {
    stars: number|undefined
}

export default function Rank(props: IProps) {

    const numberOfStars = new Array(props.stars).fill(true, 0)
    return <div>
        {numberOfStars.map(() => <AiFillStar />)}
    </div>
} 
import React, { useEffect, useState } from "react";
import SuCard from "../components/SuCard";
export default () => {
    const n = 3;
    const [board, setBoard] = useState([]);
    useEffect(() => {
        let cnt = n ** 2;
        let brd = [];
        for (let i = 0; i < cnt; i++) {
            brd.push([]);
            for (let j = 0; j < cnt; j++) { 
                //console.log(i, j, i * cnt + j);
                brd[i].push(null);
                /*
                    i = 1, j = 0-8, cnt = 9
                    0 2 4 6 8 10 12 14 16
                    9 10 11 12 13 14 15 16 17                
                */
            }
        }
        setBoard(brd);
        console.log(brd);
    }, []);
    return <div 
        className="board" 
        style={{
            gridTemplateColumns: `repeat(${n**2}, auto)`
        }}
    >
        {board.reduce((arr, el, i) => {
            el.forEach((cell, j) => {
                arr.push(<SuCard key={i * (n**2) + j} n={i * (n**2) + j} content={cell} cnt={n}/>)
            })
            return arr;
        }, [])}
    </div>
}
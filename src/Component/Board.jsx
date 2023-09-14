import React , { useState } from 'react';
import Square from './Square.jsx'

const Board = () => {
    const [val,setVal] = useState(Array(9).fill(null));
    const [isXTurn, setTurn] = useState(true);

    const checkWinner = () => {
        let check = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let t of check){
            let [a,b,c] = t;
            if(val[a]!=null&&val[a]===val[b]&&val[b]===val[c]&&val[c]===val[a]){
                return val[a];
            }
        }
        return false;
    };

    let isWinner = checkWinner();

    const [currturn , setCurrturn] = useState("X");

    const handleClick = (index) => {
        if(val[index]==null){
            const copyVal = [...val];
            copyVal[index] = isXTurn? 'X' : 'O';
            setVal(copyVal);
            setTurn(!isXTurn);
            if(currturn == 'X'){
                setCurrturn('O');
            }else{
                setCurrturn('X');
            }
            setIsswitchvis(false);
        }
    };

    const handleReset = () => {
        setVal(Array(9).fill(null));
        setCurrturn('X');
        setTurn("X");
        setIsswitchvis(true);
    };
    
    
    const isfilled = () => {
        for(let i = 0;i<9;i++){
            if(val[i]==null){
                return false;
            }
        }
        return true;
    }
    
    const filled = isfilled();
    
    const [isswitchvis, setIsswitchvis] = useState(true);

    const switchturn = () => {
        if(currturn=='O'){
            setCurrturn('X');
            setTurn(true);
        }else{
            setCurrturn('O');
            setTurn(false);
        }

    }

    return(
        <div className='wrapper'>
            {filled? 
            <div>
                <div>
                    <p className='txtcenter'>Match is Draw</p>
                </div>
                <button className='playagain-btn' onClick={handleReset}>
                    Play Again
                </button>
            </div> 
            : 
            isWinner? 
            <div>
                <div>
                    <p className='txtcenter'>{isWinner} is Winner</p>
                </div>
                <button className='playagain-btn' onClick={handleReset}>
                    Play Again
                </button>
            </div> 
            :
            <div>
            <h1>Player {currturn} turn :- {isswitchvis? <button onClick={()=>{switchturn()}} className='playagain-btn'>Switch</button> : <></>}</h1>
            <div className='board-container'>
                <div className='board-row'>
                    <Square onClick={()=>{handleClick(0)}} value={val[0]} />
                    <Square onClick={()=>{handleClick(1)}} value={val[1]} />
                    <Square onClick={()=>{handleClick(2)}} value={val[2]} />
                </div>
                <div className='board-row'>
                    <Square onClick={()=>{handleClick(3)}} value={val[3]} />
                    <Square onClick={()=>{handleClick(4)}} value={val[4]} />
                    <Square onClick={()=>{handleClick(5)}} value={val[5]} />
                </div>
                <div className='board-row'>
                    <Square onClick={()=>{handleClick(6)}} value={val[6]} />
                    <Square onClick={()=>{handleClick(7)}} value={val[7]} />
                    <Square onClick={()=>{handleClick(8)}} value={val[8]} />
                </div>
            </div>
            </div>
            }
        </div>
    );
}

export default Board;

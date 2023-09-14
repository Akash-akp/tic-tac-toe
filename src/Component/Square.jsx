import React , {useState} from 'react';

const Square = (props) => {
    return (
        <div onClick={props.onClick} className='board-square'>
            {props.value}
        </div>
    );
}

export default Square;

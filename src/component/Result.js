import React from 'react'

const Result=({score,playAgain})=>{
    return(
    <div className='score-board'>
    <div className='score'>you scored {score}/5 answers!</div>
    <button className='playBtn' onClick={playAgain}>
    play again </button>
    </div>
    )
}
export default Result
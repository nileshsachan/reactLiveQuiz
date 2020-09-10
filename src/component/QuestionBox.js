import React, {useState} from 'react';

const QuestionBox=({question,options,selected})=>{
    const [ans,setAns]=useState(options);
    return(
        <div className='questionBox'>
        <div className='question'>{question}</div>
        {ans.map((text,index)=>(
            <button 
            key={index}
            className='answerBtn'
            onClick={()=>{
                setAns([text]);
                selected(text);
            }}
            >
            {text}
            </button>
        )
        )}
        </div>
    )
}
export default QuestionBox
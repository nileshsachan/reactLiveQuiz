import React,{Component} from 'react';
import ReactDom from 'react-dom';
import "./assets/style.css";
import quizService from './quizService';
import QuestionBox from './component/QuestionBox';
import Result from './component/Result';

class Quiz extends Component{
    state={
        questionbank:[],
        score:0,
        responce:0,
    };
    getQuestions=()=>{
        quizService().then(question=>{
            this.setState({
                questionbank: question
            });
        });
    };
    componentDidMount(){
        this.getQuestions();
    }
    computeAnswer=(answer,correct)=>{
        if(answer===correct){
            this.setState({
                score:this.state.score+1,
            })
        }        
        this.setState({
            responce:this.state.responce<5? this.state.responce+1 : 5   
        })
    }
    playAgain=()=>{
        this.getQuestions();
        this.setState({
            score:0,
            responce:0
        })
    }
    render(){
        return(
            <div className='container'>
            <div className='title'>quiz</div>
            {this.state.questionbank.length > 0 &&
            this.state.responce < 5 &&
                 this.state.questionbank.map(
                     ({question,answers,correct,questionId})=> 
                     <QuestionBox question={question} options={answers} key={questionId} selected={answer=>this.computeAnswer(answer,correct)} />
                     )}

                     {this.state.responce===5? (
                         <Result score={this.state.score} playAgain={this.playAgain}/>
                     ):null}
            </div>
        );
    }
}

ReactDom.render(<Quiz/>,document.getElementById("root"));
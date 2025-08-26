import React from 'react';
import "./QuizBody.css";
import type { IQuiz } from '../../model/quiz.model';
export type Props = {
    quizItem: IQuiz|null;
    selectedAnswer: number;
    handleAnswerClick: (answerSelected: number)=>void;
}

export const QuizBody:React.FC<Props> = ({quizItem, selectedAnswer,  handleAnswerClick})=> {
    const getAnswerStyleClass = (optionIndex: number)=>{
        const optionIndexToMatch = optionIndex + 1
        let className='';
        if(selectedAnswer>-1 && quizItem?.answer=== selectedAnswer && selectedAnswer===optionIndexToMatch) {
            className='green';
        } else if(selectedAnswer>-1 && quizItem?.answer!== selectedAnswer && selectedAnswer===optionIndexToMatch){
            className='red';
        } else if(selectedAnswer>-1 && quizItem?.answer!== selectedAnswer && quizItem?.answer===optionIndexToMatch){
            className='green';
        } 
        return className;
    }
    return(<>
        <div key={quizItem?.question} className="question">
            {quizItem?.question}
        </div>
        <ul className='options'>
            {quizItem?.options?.map((option: string, index: number)=><li className={getAnswerStyleClass(index)} onClick={()=>handleAnswerClick(index+1)} key={`option-${index}`}>{option}</li>)}
        </ul>
        </>);

}
import React, { useEffect, useState } from 'react';
import type { IQuiz} from '../../model/quiz.model';
import "./Quiz.css";
import { QuizBody } from '../QuizBody/QuizBody';
import { QuizFooter } from '../QuizFooter/QuizFooter';

export const Quiz:React.FC = ()=> {
 
    const [quizList, setQuizList] = useState<IQuiz[]>([]);
    let [quizIndex, setQuizIndex] = useState<number>(0);
    const [currentQuiz, setCurrentQuiz] = useState<IQuiz|null>(null);
    const [selectedAnsIndex, setSelectedAnsIndex] =  useState<number>(-1);
    let [quizScore, setQuizScore] = useState<number>(0);
    const [answerLock, setAnswerLock] = useState<boolean>(false);
    useEffect(()=> {
        const quizLists: IQuiz[] = [{
            question: 'Largest continent of world',
            options:['Asia', 'Africa', 'Australia', 'Europe'],
            answer: 1
        },
        {
            question: 'Smallest continent of world',
            options:['Asia', 'Africa', 'Australia', 'Europe'],
            answer: 3
        },
         {
            question: 'Capital of India',
            options:['Delhi', 'London', 'New York', 'Tokyo'],
            answer: 1
        },
         {
            question: 'Capital of Japan',
             options:['Delhi', 'London', 'New York', 'Tokyo'],
            answer: 4
        },
    ]
    
     const currectQuizObject = {...quizLists[quizIndex]};
     console.log(currectQuizObject.question);
     setQuizList(quizLists);
     setCurrentQuiz(currectQuizObject);
    },[]);

    const handleAnswerClick = (answerIndex: number) => {
      if(answerLock) {
        return;
      }
      setAnswerLock(true);
      setSelectedAnsIndex(answerIndex);
      if(answerIndex === currentQuiz?.answer) {
        setQuizScore(++quizScore);
      }
    }
    const handleNextClick = () => {
      setAnswerLock(false);
      quizIndex = quizIndex + 1;
      setQuizIndex(quizIndex);
      const currectQuizObject = {...quizList[quizIndex]};
      setCurrentQuiz(currectQuizObject);
      setSelectedAnsIndex(-1);
    }
    return (
        <div className="container">
            <div className='quiz-body'>
                <QuizBody key={currentQuiz?.question} handleAnswerClick={handleAnswerClick} quizItem={currentQuiz} selectedAnswer={selectedAnsIndex}></QuizBody>
            </div>
            <div className='quiz-footer'>
                <QuizFooter handleNextClick={handleNextClick} quizScore={quizScore} quizTotal={quizList.length}></QuizFooter>
            </div>
        </div>);
    
    
}
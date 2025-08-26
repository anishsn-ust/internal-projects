export type Props = {
    quizScore: number,
    quizTotal: number,
    handleNextClick: ()=>void;
}

export const QuizFooter:React.FC<Props> = ({quizScore, quizTotal, handleNextClick})=> {

    return(<div className="quiz-footer">
        <button className="next" onClick={()=>handleNextClick()}>Next</button>
        <div className="score">
            You Answered {quizScore} of {quizTotal}
        </div>
    </div>)
}

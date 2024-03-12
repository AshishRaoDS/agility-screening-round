import React from 'react'
import FillAnswerSection from './FillAnswerSection';

type Props = {
    questions: any;
    currentQuestion: number;
    setTotalScore: React.Dispatch<React.SetStateAction<number>>;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
    submitQuiz: (score: number) => void;
    totalScore: number
}

const OptionsSection: React.FC<Props> = ({
    questions,
    currentQuestion,
    setTotalScore,
    setCurrentQuestion,
    submitQuiz,
    totalScore
}) => {


    const handleOptionSelect = (option: string) => {
        let totalScoreValue = totalScore
        if (questions[currentQuestion].answer === option) {
            setTotalScore(prevState => prevState + 1)
            totalScoreValue += 1
        }
        if(currentQuestion === questions.length - 1) {
            submitQuiz(totalScoreValue)
        }
        setCurrentQuestion(prevState => prevState + 1);

    };

    const submitHandler = (answers: string[]) => {
        let totalScoreValue = totalScore
        let countOfCorrectAnswers = 0;
        answers.forEach((answer:string) => {
            if(answer.trim() && questions[currentQuestion].answer.includes(answer.trim().toLowerCase())) {
                countOfCorrectAnswers += 1
            }
        })

        if(countOfCorrectAnswers === answers.length) {
            setTotalScore(prevState => prevState + 1) 
            totalScoreValue += 1
        }
        if(currentQuestion === questions.length - 1) {
            submitQuiz(totalScoreValue)
        }
        setCurrentQuestion(prevState => prevState + 1)
    }

    const displaySection = (currentQuestion: any) => {
        if (currentQuestion.type === 'select') {
            return (
                currentQuestion.options.map((option: any) => (
                    <button key={option} onClick={() => handleOptionSelect(option)} className="option-button">
                        {option}
                    </button>
                )))
        }

        return (
            <FillAnswerSection currentQuestion={currentQuestion} submitHandler={submitHandler} />
        )
    }
    return (
        questions.length && displaySection(questions[currentQuestion])
    )
}

export default OptionsSection
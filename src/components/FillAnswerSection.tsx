import React, { useState } from 'react';
import '../styles/Quiz.css'

type Props = {
    currentQuestion: any;
    submitHandler: (answers: string[]) => void
}

const FillAnswerSection: React.FC<Props> = ({
    currentQuestion,
    submitHandler
}) => {
    const [answers, setAnswers] = useState(['']);

    const handleInputChange = (index: number, value: string) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    return (
        <>
            <div className='fillContainer'>
                {currentQuestion.answer.map((value: any, index: number) => (
                    <div className='fillInputWrapper' key={value}>
                        <input placeholder={`Answer No. ${index + 1} `}
                            className='fillInput'
                            type="text"
                            name="value"
                            value={answers[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <button className='fillSubmitCta' onClick={() => {submitHandler(answers); setAnswers([''])}}>Submit</button>
        </>
    )
}

export default FillAnswerSection
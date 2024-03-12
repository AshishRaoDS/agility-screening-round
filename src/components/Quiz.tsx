import React, { useState, useEffect } from 'react';

import OptionsSection from './OptionsSection';


interface Props {
    submitQuiz: (score: number) => void;
    questions: any
}

const Quiz: React.FC<Props> = ({submitQuiz, questions}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(questions[0].time);
    const [totalScore, setTotalScore] = useState(0);
    const [timerId, setTimerId] = useState<any>(null);

    useEffect(() => {
      if(timeLeft === -1 && currentQuestion !== questions.length -1) {
        setCurrentQuestion(prevState => prevState + 1)
      } 

      if(timeLeft === -1 && currentQuestion === questions.length -1) {
        submitQuiz(totalScore)
      }
    },[timeLeft])

    useEffect(() => {
      const timeAvailable = questions[currentQuestion].time;
    
      if (timerId) {
        clearInterval(timerId);
      }
    
      setTimeLeft(timeAvailable);
    
      const interval = setInterval(() => {
        setTimeLeft((prevTimeLeft: number) => prevTimeLeft - 1);
      }, 1000);
    
      setTimerId(interval);
    
      return () => {
        clearInterval(interval);
      };
    }, [currentQuestion, questions]);
    

    return (
      <div>
        <h1 className='title'>Screening round</h1>
        <p className='subTitle'>We keep the world moving. Come and be a part of it!</p>
        <p className="timer">Time left: {timeLeft} seconds</p>
        <div>
          <h2 className="question-title">{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
          <OptionsSection 
            questions={questions} 
            currentQuestion={currentQuestion} 
            setTotalScore={setTotalScore} 
            setCurrentQuestion={setCurrentQuestion}
            submitQuiz={submitQuiz}
            totalScore={totalScore}
          />
        </div>
      </div>
    );
  };

    export default Quiz;

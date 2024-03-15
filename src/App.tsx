import './styles/index.css'
import Quiz from './components/Quiz'
import { useState } from 'react'
import { SubmitResponse } from './components/SubmitResponse'
import LandingPage from './components/LandingPage'
import generateRandomId from './helpers/generateId'
import { getRandomElements } from './utils/data/balwant-data-engineer';

function App() {
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [finalScore, setFinalScore] = useState(0);
  const [userValidated, setUserValidated] = useState(false);
  const [quizId, setQuizId] = useState(generateRandomId())
  const [role, setRole] = useState("");

  const questions = role && role === 'data-engineer' ? 
  getRandomElements() : 
  getRandomElements();

  const resetQuiz = () => {
    setIsQuizSubmitted(false);
    setIsQuizStarted(false);
    setUserEmail('');
    setRole('')
  }

  const submitQuiz = (score: number) => {
    console.log('Your final score', score)
    setFinalScore(score)
    setIsQuizSubmitted(true);
  }

  const quizStartHandler = () => {
      setIsQuizStarted(true);
      setUserValidated(false);
  }

  if(!isQuizStarted) {
    return (
      <>
      <nav className="header">
        <div>
          <button className='logoWrapper' onClick={resetQuiz}>
            <img className='logo' src="/smc2-logo.png" alt="SMC2 logo" />
          </button>
        </div>
      </nav>
      <div className="quiz-container">
        <LandingPage 
          setIsQuizStarted={setIsQuizStarted} 
          setUserEmail={setUserEmail} 
          userEmail={userEmail} 
          userValidated={userValidated}
          quizStartHandler={quizStartHandler} 
          setQuizId={setQuizId}
          quizId={quizId}
          setUserValidated={setUserValidated}
          setRole={setRole}
          role={role}
          />
      </div> 
    </>
    )
  }

  return (
    <>
      <nav className="header">
        <div>
          <button className='logoWrapper' onClick={resetQuiz}>
            <img className='logo' src="/smc2-logo.png" alt="SMC2 logo" />
          </button>
        </div>
      </nav>
      <div className="quiz-container">
        {
          !isQuizSubmitted ? 
          <Quiz submitQuiz={submitQuiz} questions={questions}/> :
          <SubmitResponse 
            finalScore={finalScore} 
            userEmail={userEmail}
            quizId={quizId}
            />
        }
      </div> 
    </>
  )
}

export default App

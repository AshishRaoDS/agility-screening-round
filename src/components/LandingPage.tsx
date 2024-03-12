import React, { FormEvent, useRef, useState } from 'react';
import '../styles/LandingPage.css';
import emailjs from '@emailjs/browser';

interface Props {
  setIsQuizStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  quizStartHandler: () => void;
  userValidated: boolean;
  setQuizId: React.Dispatch<React.SetStateAction<string>>
  quizId: string;
  setUserValidated: React.Dispatch<React.SetStateAction<boolean>>;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  role: string
}

const LandingPage: React.FC<Props> = ({
  quizStartHandler,
  setUserEmail,
  userEmail,
  userValidated,
  quizId,
  setUserValidated,
  setRole,
  role
}) => {
  const [userSideQuizId, setUserSideQuizId] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useRef<any>(null);

  const userEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value)
  }

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.current = form.current ?? ''

    const serviceID = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicAPIKey = import.meta.env.VITE_EMAILJS_PUBLIC_API

    if(userEmail) {
      // emailjs.sendForm(serviceID, templateId, form.current, publicAPIKey)
      //   .then((result) => {
            setUserValidated(true)
            // console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
    }
  };

  const startQuizHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if(userSideQuizId === quizId) {
      quizStartHandler();
    // }
    setUserSideQuizId('') 
  }

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to your screening round</h1>
        <h3 className='noteTitle'>Things to note:</h3>
        <ul className='listWrapper'>
          <li>Select the role you want to be interview for.</li>
          <li>As soon as you start the quiz, a timer will be set in motion for each question.</li>
          <li>If you exceed the allocated time for a given question, the question automatically gets skipped.</li>
          <li>Quiz ends as soon as you answer all the questions or when the timer has run out.</li>
          <li>You get only one shot at the questions. After selecting/submitting an answer, you won't be able to change it.</li>        
        </ul>
      
        {
          userValidated ?
            <form className='startCtaIdWrapper' onSubmit={startQuizHandler}>
              <input className='quizId' onChange={(e) => setUserSideQuizId(e.target.value)} type="text" placeholder='Quiz ID' required value={userSideQuizId} />
              <button type='submit' className="start-quiz-button">Start Quiz</button>
            </form> :
            <form ref={form} className='startCtaIdWrapper' onSubmit={startQuizHandler}>
                <div className="custom-dropdown">
                  <div className="custom-select-wrapper">
                    <select defaultValue="" name="role" onChange={(e) => setRole(e.target.value)} id="role">
                    <option value="" disabled >Select a role</option>
                      <option value="data-engineer">Data Engineer</option>
                      <option value="power-bi">Power BI</option>
                    </select>
                  </div>
                </div>
                <input className='quizId' onChange={userEmailHandler} type="email" placeholder='Email Id' required value={userEmail} />
                <input className='hiddenElement' readOnly value={quizId} name='quiz_id'/>
                <button type='submit' disabled={!role} className="start-quiz-button">Validate email</button>
            </form>
        }
      </div>
    </div>
  );
};

export default LandingPage;

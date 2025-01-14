import React, { useState } from 'react'

const Quiz = () => {
    const questions = [
		{
			questionText: 'What is the capital of Nigeria?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Abuja', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Who is the GOAT of Emo Rap?',
			answerOptions: [
				{ answerText: 'XXX Tentacion', isCorrect: false },
				{ answerText: 'Juice WRLD', isCorrect: true },
				{ answerText: 'Kanye West', isCorrect: false },
				{ answerText: 'Jay Z', isCorrect: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleButtonClick = (isCorrect)=>{
        if (isCorrect){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else{
            setShowScore(true);
        }
    };
    
    const handleResetButton = ()=>{
        setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
    }

  return (
    <>
        <div className='app'>
			{showScore ? (
				<div className='score-section'>
                    You scored {score} out of {questions.length}
                    <button onClick={handleResetButton}>Start Over?</button>
                </div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=>(
                            <button onClick={()=>handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
					</div>
				</>
			)}
		</div>
    </>
  )
}

export default Quiz
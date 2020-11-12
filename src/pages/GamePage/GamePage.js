import React, { useEffect, useState } from 'react';
import './GamePage.scss';
import { Redirect } from 'react-router-dom';
import Answer from '../../components/Answer/Answer';
import MenuMobile from '../../components/MenuMobile/MenuMobile';
import Amount from '../../components/Amount/Amount';

const GamePage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      // eslint-disable-next-line no-use-before-define
      setData(data);
    };
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  // eslint-disable-next-line prefer-const
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [isEnd, setEnd] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    setTimeout(() => {
      if (isCorrect && currentQuestion < 11) {
        // eslint-disable-next-line no-plusplus
        setCurrentQuestion(++currentQuestion);
      } else {
        setShowCorrect(true);
        setTimeout(() => setEnd(true), 2000);
      }
    }, 3000);
  };

  return (
        <>
            <MenuMobile data={data} currentQuestion={currentQuestion}/>
            <div className="gameContainer">
                <div className="wrapper">
                    <main className='gameContainer__main'>
                        <h1 className='gameContainer__title'>{data[currentQuestion] && data[currentQuestion].title}</h1>
                        <div className="gameContainer__answerBlock">
                            {data[currentQuestion] && data[currentQuestion].options.map((e) => (
                                <Answer
                                    key={e.id}
                                    variant={e.variant}
                                    id={e.id}
                                    text={e.text}
                                    correct={e.correct}
                                    correctFn={handleAnswerClick}
                                    show={showCorrect}
                                />
                            ))}
                        </div>
                    </main>
                </div>
                <div className='amount-block'>
                    {data && data.map((e) => (
                        <Amount
                            key={e.id}
                            text={e.amount}
                            current={e.id === currentQuestion + 1}
                            previous={e.id <= currentQuestion}/>))}
                </div>
            </div>
            {isEnd ? <Redirect to={{
              pathname: '/finish',
              state: {
                // eslint-disable-next-line no-nested-ternary
                result: currentQuestion > 0 && currentQuestion < 11
                  ? data.reverse()[currentQuestion - 1].amount
                  : currentQuestion >= 11
                    ? data.reverse()[currentQuestion].amount
                    : 0,
              },
            }}/> : null}
        </>
  );
};

export default GamePage;

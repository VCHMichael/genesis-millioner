import React, { useState } from 'react';
import './Answer.scss';
import PropTypes from 'prop-types';
import answerBG from '../../assets/answer-border.svg';
import answerCorrectBG from '../../assets/answer-border-correct.svg';
import answerSelectedBG from '../../assets/answer-border-selected.svg';
import answerWrongBG from '../../assets/answerd-border-wrong.svg';

const handleClick = (correct, correctFn, clicked, setCorrect) => {
  setTimeout(() => {
    setCorrect(true);
  }, 1000);
  setTimeout(() => {
    setCorrect(false);
    clicked(false);
  }, 3005);
  correctFn(correct);
};

const styles = {
  answerCorrectStyle: { backgroundImage: `url(${answerCorrectBG})` },
  answerWrongStyle: { backgroundImage: `url(${answerWrongBG})` },
  answerSelectedStyle: { backgroundImage: `url(${answerSelectedBG})` },
  answerInactiveStyle: { backgroundImage: `url(${answerBG})` },
};

const Answer = ({
  variant, text, correct, correctFn, show,
}) => {
  const [isClicked, setClicked] = useState(false);
  const [isCorrect, setCorrect] = useState(false);

  return (
    !isCorrect ? (<div className='answer'
                       /* eslint-disable-next-line no-nested-ternary */
                           style={isClicked
                             ? styles.answerSelectedStyle
                             : show && correct
                               ? styles.answerCorrectStyle
                               : styles.answerInactiveStyle}
                           onClick={() => {
                             handleClick(correct, correctFn, setClicked, setCorrect);
                             setClicked(true);
                           }}>
                <span className='answer__variant'>{variant}</span>
                <span className='answer__text'>{text}</span>
            </div>)
      : (
                <div className='answer' style={correct ? styles.answerCorrectStyle : styles.answerWrongStyle}>
                    <span className='answer__variant'>{variant}</span>
                    <span className='answer__text'>{text}</span>
                </div>
      )
  );
};

Answer.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  correct: PropTypes.bool,
  correctFn: PropTypes.func,
  show: PropTypes.bool,
};

export default Answer;

import React, { useState } from 'react';
import styled from 'styled-components';

export default function Question({ title, questionList }) {
  const [ checkedElement, setCheckedElement ] = useState(-1);
  
  const onChangeRadioBtn = (e) => {
    setCheckedElement(Number(e.target.value));
  }

  return (
    <QuestionWrap>
      <div className='question-title'>{ title }</div>
      <div>
        {questionList.map((question,idx) => (
          <RadioWrap key={ idx }>
            <input 
              type="radio" 
              value={ idx }
              checked={ checkedElement === idx }
              onChange={ onChangeRadioBtn }
            />
            { checkedElement === idx ? <i className='xi-check-circle' /> : <i className='xi-check-circle-o' /> }
            <div className="question-text">{ question }</div>
          </RadioWrap>
        ))}
      </div>
    </QuestionWrap>
  )
}

const QuestionWrap = styled.div`
  margin-bottom: 16px;
  .question-title {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
  }
`;

const RadioWrap = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  input {
    display: none;
  }
  .question-text {
    margin-left: 8px;
  }
`;

import styled from 'styled-components';
import './App.css';
import { dummy } from './questionDummy';
import Question from './components/Question';


function App() {
  return (
    <RootWrap className="App">
      {dummy.map((item,idx) => (
        <Question 
          key={ idx } 
          title={ item.title } 
          questionList={ item.questionList } 
        /> 
      ))}
    </RootWrap>
  );
}

export default App;

const RootWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  left: 50%;
  transform: translate(-50%,0);
  background: white;
`;


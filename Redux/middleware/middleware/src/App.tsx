import React from 'react';
import { useSelector } from 'react-redux';
import { fetch_result } from './_actions/__01__action';
import { useThunkDispatch } from './_thunk';
import { ResultState } from './_reducers/__01__reducer';
import { RootState } from './_reducers';


function App() {

  const content:ResultState = useSelector((state:RootState) => state.reducer__01);
  const dispatch = useThunkDispatch<ResultState>();

  React.useEffect(() => {
    dispatch(fetch_result())
    
  }, [dispatch])
  
  return (
    <div className="App">
      { content.result.map((content,idx) => (
        <div key={ idx }>
          <h1>{ content.gender }</h1>
          <p>{ content.email }</p>
          <p>{ content.phone }</p>
          <img src={ content.picture.large } alt="" />
        </div>
      )) }
    </div>
  );
}

export default App;

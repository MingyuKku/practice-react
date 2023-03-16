import './App.css';
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('comments');
  
  return (
    <div className="App">
      {loading && <div>로딩중...</div>}
      {!loading && error && <div>에러 발생!!</div>}
      {!loading && data && data.map(item => (
        <div key={ item.id }>{ item.name }</div>
      ))}
    </div>
  );
}

export default App;

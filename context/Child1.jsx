const React = require('react');
const { useContext } = React;
const App = require('./App');
const Child2 = require('./Child2');

const Child1 = () => {
  const theme = useContext(App.ThemeContext);

  return (
    <>
      <h1 style={ theme }>자식컴포넌트</h1>
      <Child2 />
    </>
  )
}

module.exports = Child1;
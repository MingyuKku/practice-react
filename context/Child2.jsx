const React = require('react');
const { useContext } = React;
const App = require('./App');

const Child2 = () => {
  const theme = useContext(App.ThemeContext);

  return (
    <h1 style={ theme }>자식컴포넌트2</h1>
  )
}

module.exports = Child2;
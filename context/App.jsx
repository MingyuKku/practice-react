const React = require('react');
const { createContext, useState, memo } = React;
const Child1 = require('./Child1');

const themeDefault = { border: '10px solid green' };
const ThemeContext = createContext(themeDefault);
exports.ThemeContext = ThemeContext;

module.exports = function TestComponent() {
  const [ style, setStyle ] = useState(themeDefault);

  const onClickChangeBtn = (color) => (e) => {
    setStyle({
      border: `10px solid ${color}`
    })
  }
  

  return (
    <ThemeContext.Provider value={ style }>
      <h1>hello</h1>
      <Child1 />
      <button onClick={ onClickChangeBtn('red') }>빨강으로 변경</button>
      <button onClick={ onClickChangeBtn('blue') }>파랑으로 변경</button>
    </ThemeContext.Provider>
  )
}
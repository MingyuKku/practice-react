const React = require('react');
const { createContext, useContext } = React;

const themeDefault = { border: '10px solid green' };
const ThemeContext = createContext(themeDefault);

module.exports = function TestComponent() {

  return (
    <ThemeContext.Provider value={ themeDefault }>
      <h1>hello</h1>
      <Sub1 />
    </ThemeContext.Provider>
  )
}


const Sub1 = () => {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={ {border: '10px solid red'} }>
      <h1 style={ theme }>child1</h1>
      <Sub2 />
    </ThemeContext.Provider>
  )
}

const Sub2 = () => {
  return (
    <>
      <h1>child2</h1>
      <Sub3 />
    </>
  )
}

const Sub3 = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <h1 style={ theme }>child3</h1>
    </>
  )
}
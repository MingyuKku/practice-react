const React = require('react');
const { createRoot } = require('react-dom/client');
const TestComponent = require('./TestComponent');
// const TestComponent = require('./App');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <TestComponent />
)
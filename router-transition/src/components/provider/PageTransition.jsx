import React, { useState, createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionContext = createContext(null);

const PageTransition = ({ children }) => {

  const [ transitionStage, setTransitionStage ] = useState('fadeIn');

  const setFadeInTransition = () => {
    setTransitionStage('fadeIn');
  }

  const setFadeOutTransition = () => {
    setTransitionStage('fadeOut');
  }
  
  return (
    <TransitionContext.Provider value={ { transitionStage, setFadeInTransition, setFadeOutTransition } }>
      { children }
    </TransitionContext.Provider>
  )
}

export default PageTransition;

export const useTransitionContext = () => {
  return useContext(TransitionContext);
}
import React from 'react';
import './assets/fonts/fonts.css';
import AppTheme from './containers/AppDefaultLayout/AppTheme';
import { Router } from './routes';

function App() {
  
  return (
    <AppTheme>
      <Router  />
    </AppTheme>
  );
}

export default App;

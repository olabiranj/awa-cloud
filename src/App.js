import React from 'react';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import store from './store';
import Index from './views/Index'
dotenv.config();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Index />
      </div>
    </Provider>
    
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Ingredients from './components/streams/Ingredients';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Route path="/" render={() => <Main/>} />
      <Route path='/components/streams/ingredients' exact render={() => <Ingredients />} dog="food" />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
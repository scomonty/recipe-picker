import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Ingredients from './Ingredients';

const App = () => {
  return (
    <div>
            <BrowserRouter>
            <Route path="/recipe-picker/" exact component={Main} />
            <Route path='/components/Ingredients' exact component={Ingredients} />
      </BrowserRouter>
    </div>
  );
}

export default App;

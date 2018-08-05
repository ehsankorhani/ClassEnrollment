import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Homepage from './Class/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

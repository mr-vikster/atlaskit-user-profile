import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Root from './views/Root';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Root />
    </Router>
  );
}

export default App;

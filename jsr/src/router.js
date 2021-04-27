import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Threads from './components/routers/Threads';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/app" exact component={Threads} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

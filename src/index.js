import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import MainPage from './components/MainPage/MainPage';
import CreatePage from './components/CreatePage/CreatePage';
import EditPage from './components/EditPage/EditPage';

const routing = (
    <Router>
      <Switch>
        <Route path="/create" component={CreatePage} />
        <Route path="/edit" component={EditPage} />
        <Route path="/" component={MainPage}/>
      </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

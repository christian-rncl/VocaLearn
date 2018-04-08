import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import './index.css';

import App from './Components/App.js';
import Quiz from './Components/Quiz.js';
import Whoops404 from './Components/Whoops404';

ReactDOM.render(
  <Router history={hashHistory}>
    <div style={{height: '100%'}}>
      <Route path='/' component={App}/>
      <Route path='/home' component={App}/>
      <Route path='/quizzesList' component={App}/>
      <Route path='/quiz/:id' component={Quiz}/>
      <Route path='*' component={Whoops404}/>
    </div>
  </Router>,
  document.getElementById('root')
);

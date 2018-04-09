import React from 'react';

import Home from './Home.js';
import Header from './Header.js'
import QuizzesList from './QuizzesList';

export default class App extends React.Component{
  render(){
    var props = this.props;

    return(
      <div className='App' style={{height: '100%'}}>
        <Header />
        <div className='route_data'>
          {(props.location.pathname === '/') ? <Home /> :
          (props.location.pathname === '/home') ? <Home /> :
          (props.location.pathname === '/quizzesList') ? <QuizzesList /> :
          <h1>Error - {props.location.pathname} </h1>}
        </div>
      </div>
    );
  }
};

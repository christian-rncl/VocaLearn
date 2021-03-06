import React from 'react';
import {Link} from 'react-router';

import '../Stylesheets/Quizzes.css';

export default class QuizzesList extends React.Component{
  render(){
    return(
      <div className="quizzes-content">
        <h1>Here is a List of Your Quizzes</h1>
        <div className="col">
          <div className="row-sm-4">
            <Link to='/quiz/0'>
              <button className="btn btn-lg btn-primary language-buttons">Japanese Quiz</button>
            </Link>
          </div>
          <div className="row-sm-4">
            <Link to='/quiz/1'>
              <button className="btn btn-lg btn-primary language-buttons">Tagalog Quiz</button>
            </Link>
          </div>
          <div className="row-sm-4">
            <Link to='/quiz/2'>
              <button className="btn btn-lg btn-primary language-buttons">Arabic Quiz</button>
            </Link>
          </div>
          <div className="row-sm-4">
            <Link to='/quiz/3'>
              <button className="btn btn-lg btn-primary language-buttons">Korean Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

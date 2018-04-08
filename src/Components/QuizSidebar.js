import React from 'react';

export default class QuizSidebar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      questions : props.questions,
      currentQuestion : props.currentQuestion,
      changeQuestion : props.changeQuestion
    };
    this.displayQuizes.bind(this);
  }

  displayQuizes(){
    var q = [];
    var state = this.state;
    for(var i = 0; i < state.questions.length; i++){
      q.push(
        <div className="row-lg-3">
          <button className="btn btn-lg btn-primary question-boxes" onClick={state.changeQuestion(i)}>Problem {i}</button>
        </div>
      );
    }
    return <div>{q}</div>
  }

  render(){
    return( 
      <div className="col">
        {this.displayQuizes()}
      </div>
    );
  }
};

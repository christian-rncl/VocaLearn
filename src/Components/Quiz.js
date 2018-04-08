import React from 'react';
import QuizSidebar from './QuizSidebar.js';
import QuizQuestion from './QuizQuestion.js';

import '../Stylesheets/Quiz.css';

export default class Quiz extends React.Component{
  constructor(props){
    super(props);
    var quizzes = [
    {
        questions : ["What is \"Thank You\" in Japanese?", "How do you say \"I am very sorry\" in Japanese?",
        "How do you say \"What time is it?\" in Japanese?"],
        answers : ["ありがとうございます", "申し訳ございません", "今何時ですか"],
        language : 'ja-JP'
    },
    {
        questions : ["How do you say \"I want to play\"", "How do you say \"You're beautiful\"",
        "How do you say \"Let's sleep\""],
        answers : [ "Gusto kong maglaro", "maganda ka", "matulog tayo"],
        language : 'fil-PH'
    },

    {
        questions : ["What is \"He went to the mosque\" in Arabic?", "How do you say \"I am very sorry\" in Japanese?"],
        answers : [" ذهب الى المسجد" , "申し訳ございません"],
        language : 'ar-SA'
    },
    ];
    var id = props.params.id;
    console.log(id);
    console.log(quizzes[id].language);

    this.state = {
      questions : quizzes[id].questions,
      answers : quizzes[id].answers,
      lang : quizzes[id].language,
      currentQuestion : 1
    }
  }

  changeQuestion(newQuestion){
    this.state.currentQuestion = newQuestion;
    this.setState(this.state);
  }

  getChangeQF(i){
    return this.changeQuestion.bind(this, i + 1);
  }

  render(){
    var state = this.state;
    var currentQuestion = state.currentQuestion;
    var questions = state.questions;
    var answers = state.answers;
    var lang_set = state.lang;

    console.log("lang-set: " + lang_set);

    return(
      <div className='quiz-container'>
        <div className="row row-container">
          <div className="col-sm-2 sidebar-wrapper">
            <QuizSidebar questions={questions} currentQuestion={currentQuestion} changeQuestion={this.getChangeQF.bind(this)} />
          </div>
          <div className="col-sm-10 question-wrapper">
            <QuizQuestion question={questions[currentQuestion - 1]} answer={answers[currentQuestion - 1]} num={currentQuestion} lang={lang_set}/>
          </div>
        </div>
      </div>
    );
  }
};

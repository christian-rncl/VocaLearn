import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
  render(){
    return(
      <div className='Home'>
        <h1>Welcome!</h1>
        <p>This website enables users to study with their voice. When you can't study with someone, this website
        will be your partner. You add a set of flashcards and then answer each flashcard outloud. VocaLearn will
        tell you if you were right and will give you the pronounciation.</p>
      </div>
    );
  }
}

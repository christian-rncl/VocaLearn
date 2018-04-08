import React from 'react';
import $ from 'jquery'; 

function isWhiteSpace(char) {
    return " \t\n".includes(char);
}

/* return true if char is punctuation */
function isPunct(char) {
    return ";:.,?!-'\"(){}".includes(char);
}

/* strip punctuation and spaces from @param string */
function compress(str) {
    return ((str + '')
      .split("")
      .filter(char => !isWhiteSpace(char) && !isPunct(char))
      .join(""));
}

/* checks if result, phrase are the same */
function compare_strings(result, phrase)
{
    var result_punctuationless = compress(result).toUpperCase();
    var phrase_punctuationless = compress(phrase).toUpperCase();

      // console.log("result punctuationless: " + result_punctuationless);
      // console.log("phrase punctuationless: " + phrase_punctuationless);
      return (result_punctuationless === phrase_punctuationless);
}


export default class QuizQuestion extends React.Component{

  constructor(props){
    super(props);
    this.testSpeech.bind(this);
  }



  testSpeech(question, answer, lang) {
      console.log("TESTING" + lang);
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
      var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
      //const comparisons = require('./test_speech_comparison.js');
      var phrasePara = document.querySelector('#phrase');
      var resultPara = document.querySelector('#result');
      var diagnosticPara = document.querySelector('#output');
      var correctAnswer = document.querySelector('#correct');

      var testBtn = document.getElementById('buttontest');

    testBtn.disabled = true;
    testBtn.textContent = 'Test in progress';

    var phrase_en = question;
    // TODO SWITCH BACK TO JAP
    // var phrase = answers[idx];
    var phrase = question;
    console.log(question);
    phrasePara.textContent = '';
    resultPara.textContent = 'Right or wrong?';
    resultPara.style.background = 'rgba(0,0,0,0.2)';
    diagnosticPara.textContent = '';

    var grammar = '#JSGF V1.0; grammar phrase; public <phrase> = ' + phrase_en +';';
    var recognition = new SpeechRecognition();
    recognition.lang = lang;
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = function(event) {
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at position 0.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object
      var speechResult = event.results[0][0].transcript;
      diagnosticPara.textContent = 'Speech received: ' + speechResult + '.';
      correctAnswer.textContent = 'Correct Answer : ' + phrase + '.';


      // console.log(speechResult === phrase);
      if(compare_strings(speechResult, phrase)) {
        resultPara.textContent = 'I heard the correct phrase!';
        resultPara.style.background = 'lime';
      } else {
        resultPara.textContent = 'That didn\'t sound right.';
        resultPara.style.background = 'red';
      }

      console.log('Confidence: ' + event.results[0][0].confidence);
    }

    recognition.onspeechend = function() {
      recognition.stop();
      testBtn.disabled = false;
      testBtn.textContent = 'Start new test';
    }

    recognition.onerror = function(event) {
      testBtn.disabled = false;
      testBtn.textContent = 'Start new test';
      diagnosticPara.textContent = 'Error occurred in recognition: ' + event.error;
    }

    recognition.onaudiostart = function(event) {
        //Fired when the user agent has started to capture audio.
        console.log('SpeechRecognition.onaudiostart');
    }

    recognition.onaudioend = function(event) {
        //Fired when the user agent has finished capturing audio.
        console.log('SpeechRecognition.onaudioend');
    }

    recognition.onend = function(event) {
        //Fired when the speech recognition service has disconnected.
        console.log('SpeechRecognition.onend');
    }

    recognition.onnomatch = function(event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        console.log('SpeechRecognition.onnomatch');
    }

    recognition.onsoundstart = function(event) {
        //Fired when any sound � recognisable speech or not � has been detected.
        console.log('SpeechRecognition.onsoundstart');
    }

    recognition.onsoundend = function(event) {
        //Fired when any sound � recognisable speech or not � has stopped being detected.
        console.log('SpeechRecognition.onsoundend');
    }

    recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        console.log('SpeechRecognition.onspeechstart');
    }
    recognition.onstart = function(event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        console.log('SpeechRecognition.onstart');
    }
  } //end testSpeech

  render(){

    var props = this.props;
    var question = props.question;
    var answer = props.answer;
    var num = props.num;

    $('#result').css('background', 'rgba(0,0,0,0.2)');
    $('#result').text("Right or wrong?");
    $('#correct').text("");
    $('#output').text("");

    return(
      <div className="question-container">
        <div className="col">
          <div className="row-sm-8">
            <div className="Q">
              <h1>Question: {props.num}</h1>
              <h2>{props.question}</h2>
            </div>
            <div className="row-sm-4">
              <div className="A">
                <button id="buttontest" onClick={this.testSpeech.bind(props.question, props.answer, props.lang)}>Start new test</button>
                <div>
                	<p id="phrase"></p>
                	<p id="result">Right or wrong?</p>
                	<p id="output"></p>
                  <p id="correct"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

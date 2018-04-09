import React from 'react';
import {Link} from 'react-router';

import '../Stylesheets/Header.css';

export default class Header extends React.Component{
  render(){
    return(
      <div className='Header'>
        <div className='Navbar'>
          <a href="/home">
            <img id ="banner" src="./images/VocaLearn_Banner.png" alt="Website Banner"></img>
          </a>
          <Link to='/quizzesList'><button className='Link'>My Quizzes</button></Link>
          <Link to='/home'><button className='Link'>Log In</button></Link>
        </div>
      </div>
    );
  }
}

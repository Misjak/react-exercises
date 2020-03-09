import React, { Component } from 'react';
import './App.css';
import products from '../products'

import Navigation from './Navigation'
import UserInfo from './UserInfo'


class App extends Component {
  render() {
    return (


<header>
            <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" class="logo"/>

            <div className="user">
                <span>chell@aperture.sc</span><br/>
                <a href="#">logout</a>
            </div>
            
        </header>

    );
  }
}
export default App;

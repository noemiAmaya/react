/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
import Clock from './components/Clock/Clock'
import Counter from './components/Counter'
import Card from './components/Card/Card'
//import Button from './components/Button'
//import Notes from './components/Notes'
import Form from './components/Form'
import ConditionalRendering from './components/ConditionalRendering'

const data = [
  {
    'category': 'PSYCHOLOGY',
    'title': '5 Habits of Happy Brains',
    'description': 'Rewire your brain to enjoy more dopamine, serotonin, oxytocin, and endorphins — chemicals responsible for your happiness.',
    'author': 'Signe Roswall',
    'publicationDate': 'Apr 2019',
    'readTime': '12 min read'
  },
  {
    'category': 'WRITING',
    'title': '4 ways to get high-paying writing work — don’t self-publish.',
    'description': 'I write full-time for a living — a luxury I enjoy because I’m just as much of a business person as I am a writer While I learned The Elements of Style, I also learned Million Dollar',
    'author': 'Signe Roswall',
    'publicationDate': 'Apr 2019',
    'readTime': '12 min read'
  }
]
export default class App extends Component {

  showCards() {
    return data.map(({
      category,
      title,
      description,
      author,
      publicationDate,
      readTime

    }) => {
      return (
        <Card
          category={category}
          title={title}
          description={description}
          author={author}
          publicationDate={publicationDate}
          readTime={readTime}

        />
      )
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Holaaa!!- <strong>React</strong>
          </h1>
          <Clock/> 
          <Counter step={2} finalCounter={100} cutCounter={2}/>
          <Form/>
          <ConditionalRendering/>
        </header>
        <div className='Cards-container'>
          {this.showCards()}
        </div>
      </div>
    );
  }
} */

import React, {Component} from "react";

//PAGES
import Home from './Pages/Home'

//CSS
import "./App.css";

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <Home/>

      </div>
    );
  }
}

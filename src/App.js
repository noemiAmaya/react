
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Components
// import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const data = [
  {
    'category': 'PROGRAMING',
    'title': 'Goodbye, Adobe.',
    'description': 'Hello, Figma!',
    'author': 'Signe Roswall',
    'publicationDate': 'Apr 2019',
    'readTime': '12 min read'
  },
  {
    'category': 'DESING',
    'title': 'Goodbye, Adobe.',
    'description': 'Hello, Figma!',
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
        </header>
        <div className='Cards-container'>
          {this.showCards()}
        </div>
        {/* <Clock /> */}
      </div>
    );
  }
}
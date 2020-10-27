import './App.css';
import SimpsonQuote from './components/SimpsonQuote';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      character: '',
      image:''
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0].quote,
          character: data[0].character,
          image: data[0].image,
        });
    });
  }

  render() {
    return (
      <div className="App">
        <SimpsonQuote quote={this.state.quote} character={this.state.character} image={this.state.image} />
        <button type="button" onClick={this.getQuote}>New Quote</button>
      </div>
    );
  }
}

export default App;

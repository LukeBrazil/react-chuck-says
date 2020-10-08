import React, { Component } from "react";
import RandomQuote from './components/RandomQuote';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chuckQuote: [],
      chuckImage: []
    }
  }
  chuckSays = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await response.json();
    console.log(data)
    console.log(data.value)
    return data;
  }
  async componentDidMount() {
    const chuckQuote = await this.chuckSays();

    this.setState({
      chuckQuote: chuckQuote.value,
    });
  }

  handleClick = async () => {
    const chuckQuote = await this.chuckSays();

    this.setState({
      chuckQuote: chuckQuote.value,
      chuckImage: chuckQuote.icon_url,
    });
  }
  render() {
    const {chuckQuote} = this.state
    const {chuckImage} = this.state.chuckImage
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chuck Says</h1>
        </header>
        <div>
          <button onClick={this.handleClick}>Refresh Quote</button>
        <RandomQuote chuckQuote={chuckQuote}/>
    <img src={chuckImage} alt=''>{chuckImage}</img>
        <p>{chuckQuote}</p>
        </div>
      </div>
    );
  }
}

export default App;

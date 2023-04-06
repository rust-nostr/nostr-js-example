import logo from './logo.svg';
import './App.css';
import { Keys, loadWasmAsync } from '@rust-nostr/nostr';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { hex: null };
  }

  async componentDidMount() {
    await loadWasmAsync();

    let keys = Keys.generate();
    let hex = keys.publicKey.toHex();
    this.setState({ hex });
  }

  render() {
    return (
       <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.hex}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

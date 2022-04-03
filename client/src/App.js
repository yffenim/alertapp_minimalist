import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.fetch('/api/alerts')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  render() {
  return (
    <div className="App">
      <h1> Hello world! </h1>
    </div>
  );
}
}
export default App;

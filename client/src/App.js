import React from 'react';
import logo from './logo.svg';
import './App.css';
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }


  render() {
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;

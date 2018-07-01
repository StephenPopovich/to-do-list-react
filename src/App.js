import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
        title: 'Businnes Webiste',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
     }
     ]
    }
  }
  render() {
    return (
      <div className="App">
        My app
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

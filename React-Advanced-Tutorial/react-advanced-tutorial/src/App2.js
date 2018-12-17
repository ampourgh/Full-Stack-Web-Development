import React, { Component } from 'react';
import './App.css';
import JSONdata from './data/data.json';
import JSONcontent from './JSONcontent.js';

class App2 extends Component {
  render() {
    return (
      <section>
        {JSONdata.map((JSONdetails, index) => {
          return <JSONcontent post={JSONdetails} key={`post-list-key ${index}`} />
        })}
      </section>
    );
  }
}

export default App2;

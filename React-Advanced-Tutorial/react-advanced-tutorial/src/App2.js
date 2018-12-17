import React, { Component } from 'react';
import './App.css';
import JSONdata from './data/data.json';
import JSONcontent from './JSONcontent.js';

class App2 extends Component {

  constructor(props) {
    super(props);

    // use when method is being called within your render
    this.dataHandlerCallback = this.dataHandlerCallback.bind(this);
  };

  dataHandlerCallback(message) {
    console.log(message);
  }

  render() {
    return (
      <section>
        {JSONdata.map((JSONdetails, index) => {
          return <JSONcontent
                  post={JSONdetails}
                  key={`post-list-key ${index}`}
                  dataCallback={this.dataHandlerCallback}
                 />
        })}
      </section>
    );
  }
}

export default App2;

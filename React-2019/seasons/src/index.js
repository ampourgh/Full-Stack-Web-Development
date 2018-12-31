import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  // state is set to null
  state = { lat: null, errorMessage: '' };


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderCases() {

    // Either Error Message or push out state's latittude,
    // or show loading screen until user input changes state
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
    
  }

  // render has a callback to renderCases()
  render() {

    // return(); or return <content block> ;
    // the semicolon is a part of return, not the JSX itself
    return(<div className="border red">{this.renderCases()}</div>);

  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

import React, { Component } from 'react';
import { connect } from 'react-redux';

// Need curly braces because of how the functon is individually exported
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {

    {/* Takes each JSX song and maps it out into JSX */}

    return this.props.songs.map(song => {
      console.log('track: ' + song.title);
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              <div className="content">{song.title}</div>
            </button>
          </div>
        </div>
      );
    });

  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Going to get the data in Redux store, and do some calculations
// Usually a design practice to call it mapStateToProps (or something fairly similar)
const mapStateToProps = state => {
  // line 1 of console
  console.log(state.songs);

  // returning an object of the state's songs
  return { songs: state.songs };
};

// This piece of syntax comes from react-redux's connect import
// mapStateToProps takes Redux information and sends it off to SongList

// @XXX export default connect( PROP-MAPPER(), { ACTION } )( CLASS );
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

/*
The above syntax is the equivalent of the following JavaScript function

function connect() {
  return function() {
    return "Greetings & Salutation!";
  }
}

The second parenthesis is for the return function
connect()();
*/

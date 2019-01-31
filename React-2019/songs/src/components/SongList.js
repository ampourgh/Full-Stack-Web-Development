import React, { Component } from 'react';
import { connect } from 'react-redux';

// Need curly braces because of how the functon is individually exported
import { actionSelectSong } from '../actions';

class ClassSongList extends Component {
  renderList() {

    {/* Takes each JSX song and maps it out into JSX */}

    return this.props.songsListClassPropsSongs.map(individualSong => {
      console.log('track: ' + individualSong.title);
      return (
        <div className="item" key={individualSong.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.actionSelectSong(individualSong)}
            >
              <div className="content">{individualSong.title}</div>
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
  console.log(state.reducerStateSongsList);

  // returning an object of the state's songs
  return { songsListClassPropsSongs: state.reducerStateSongsList };
};

// This piece of syntax comes from react-redux's connect import
// mapStateToProps takes Redux information and sends it off to ClassSongList

// @XXX export default connect( PROP-MAPPER(), { ACTION } )( CLASS );
export default connect(
  mapStateToProps,
  { actionSelectSong }
)(ClassSongList);

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

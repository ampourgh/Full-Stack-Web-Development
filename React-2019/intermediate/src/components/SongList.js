import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songsListsClassPropsSongs.map(individualSong => {
      return (
        <div className="item" key={individualSong.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(individualSong)}
            >
              Select
            </button>
          </div>
          <div className="content">{individualSong.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songsListsClassPropsSongs: state.reducerStateSongsList };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);

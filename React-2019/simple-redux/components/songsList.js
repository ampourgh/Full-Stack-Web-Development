import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

  renderList() {
    return this.props.songsListsClassPropsSongs.map(individualSong => {
      return (
        <div className="item" key={individualSong.name}>
          <div className="right floated content">
          </div>
          <div className="content">{individualSong.amountofMoneyToCollect}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songsListsClassPropsSongs: state.claimsHistory };
};

export default connect(mapStateToProps)(SongList);

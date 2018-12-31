import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// If "Please accept location request", then it'll
Spinner.defaultProps = {
  message: 'Default loading message.'
};

export default Spinner;

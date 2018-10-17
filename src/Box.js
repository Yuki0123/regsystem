import React, { Component, PropTypes } from 'react';

export default class Box extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

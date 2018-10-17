import React, { Component, PropTypes } from 'react';

import Box from './Box';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBox: false,
    };
  }

  handleClick() {
    this.setState({showBox: !this.state.showBox});
  }

  render() {
    const btnName = this.state.showBox ? 'Box非表示' : 'Box表示';
    const boxComponent = this.state.showBox ? (
      <Box>Sample Box</Box>
    ) : null;

    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {boxComponent}
        {/* onClick イベントが呼び出された時に handleClick() を呼び出す */}
        <button className="btn btn-primary" onClick={() => this.handleClick()}>{btnName}</button>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation';
//import { Home, Item1, Item2 } from './Pages'

import LoginButton from './LoginButton';
import NameForm from './NameForm';





class NavigationBar extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get('name') || 'Ben',
      userId: cookies.get('userId')
    };
  }

  handleNameChange(name) {
    const { cookies } = this.props;

    cookies.set('name', name, { path: '/' });
    this.setState({ name });
  }


  render() {
    const navComponent  = <Navigation/>;
    const loginComponent=<LoginButton/>;
    const { name } = this.state;

    return (
      <div>
      {navComponent}
      {loginComponent}
      <NameForm name={name} onChange={this.handleNameChange.bind(this)} />
      {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </div>
    );
  }
}

export default withCookies(NavigationBar);

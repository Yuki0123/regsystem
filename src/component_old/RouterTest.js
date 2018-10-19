import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';


const Header = (props) => <div>Header</div>
const Home = ({ authenticate, isLoggedIn }) => {
  return (
    <div>
      <div>
        <p>You are now {isLoggedIn ? 'logged in!' : 'logged out!'}</p>
        <button onClick={authenticate}>
          { isLoggedIn ? 'Log out' : 'Log in'}
        </button>
      </div>
      <nav>
        <ul>
          <li><Link to='/member'>Member Page</Link></li>
        </ul>
      </nav>
    </div>
  )
}
const requireAuthentication = (WrappedComponent) => {
  return class EnhancedComponent extends Component {
    render() {
      if (this.props.isLoggedIn === false) {
        return <Redirect to={'/'} />
      }
      return <WrappedComponent { ...this.props } />
    }
  }
}
const MemberPage = () => <h1>Member Page</h1>
const ProtectedMemberPage = requireAuthentication(MemberPage);


class RouterTest extends Component {
  state = {
    isLoggedIn: false
  }

  handleLogin = () => {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Home isLoggedIn={this.state.isLoggedIn} authenticate={this.handleLogin} />} />
            <Route path="/member" render={(props) => <ProtectedMemberPage isLoggedIn={this.state.isLoggedIn} {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterTest;

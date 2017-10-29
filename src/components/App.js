import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import { app, base } from './Authentication/base';

function AuthenticatedRoute({component: Component, authenticated, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => authenticated === true
        ? <Component {...props} {...rest} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} /> } />
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: true,
        };
        this.setCurrentUser = this.setCurrentUser.bind(this);
    }

    setCurrentUser(user) {
        if (user) {
            this.setState({
                currentUser: user,
                authenticated: true
            });
        } else {
            this.setState({
                currentUser: null,
                authenticated: false
            });
        }
    };

    componentWillMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false,
                });
            }
        });
    };

    componentWillUnmount() {
        this.removeAuthListener();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" render={(props) => {
                            return <Login setCurrentUser={this.setCurrentUser} {...props} />
                        }} />
                        <AuthenticatedRoute
                            exact
                            path="/Main"
                            authenticated={ this.state.authenticated }
                            component={Main}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    };
}

export default App;

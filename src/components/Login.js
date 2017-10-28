import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Button, TextField, Paper, Divider } from 'material-ui';
import styles from '../styles/Login.css';
import { app } from './Authentication/base';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            authenticated: false,
            currentUser: null,
            redirect: false,
            loading: true,
        }
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    authWithEmailPassword(event) {
        event.preventDefault();
        console.log("auth with username");
    }

    registerUser() {
        console.log("register customer");
    }

    componentWillMount() {
        this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        });
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="loginPage" style={styles.loginPage}>
                <Paper style={{ padding: "25px", height: "200px", width: "450px", border: "solid 10px red" }}>
                    <img src={require('../images/hiossenLogo.jpg')} alt="HiossenLogo" width="50%" />
                    <Divider light/>
                    <TextField 
                        id="username"
                        label="Username"
                        fullWidth
                    /><Divider light/>
                    <TextField 
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    /><Divider/>
                    <div className="authButtons" style={styles.loginButtons}>
                        <Button
                            className="submitButton"
                            style={{marginRight: '180px'}}
                            onClick={ (e) => this.authWithEmailPassword(e) }
                        >
                            Log in
                        </Button>
                        <Button
                            className="registerButton"
                            onClick={ () => this.registerUser() }
                        >
                            Register
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Login;
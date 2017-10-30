import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { 
    Button, 
    TextField, 
    Paper, 
    Divider,
} from 'material-ui';

import { app } from './Authentication/base';
import Dialog from './common/DialogWindow';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
        }
        this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    // authentication email and password
    authWithEmailPassword(event) {
        event.preventDefault();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        // check Anybody has same email address
        app.auth().fetchProvidersForEmail(email)
            .then((providers) => {
                if(providers.length === 0 ) {
                    //create user
                    return app.auth().createUserWithEmailAndPassword(email, password);
                } else {
                    //Sign user in
                    return app.auth().signInWithEmailAndPassword(email, password);
                }
            })
            .then((user) => {
                if (user && user.email) {
                    this.setState({ redirect: true });
                    this.props.setCurrentUser(user);
                }
            })
            .catch((error) => {
                return <Dialog title={"ABC"} content={"DFG"} />
            })
    };

    registerUser() {
        console.log("register customer");
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/Main' } }
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to={from} />
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
                        inputRef={ (input) => {this.emailInput = input} }
                    /><Divider light/>
                    <TextField 
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        inputRef={ (input) => {this.passwordInput = input} }
                    /><Divider/>
                    <div className="authButtons" style={styles.authButtons}>
                        <Button
                            className="submitButton"
                            style={{marginRight: '180px'}}
                            onClick={ (event) => this.authWithEmailPassword(event) }
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

const styles = {
    loginPage : {
        background: '#333333',
        
        justifyContent: 'center',
    },

    logoStyle : {
        width: '50%',
        height: '50%',
    },

    authButtons : {
        marginTop : '1em',
    }

}


export default Login;
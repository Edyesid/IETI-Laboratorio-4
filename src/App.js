import React, {Component} from 'react';
import DrawerLeft from './components/DrawerLeft';
import {Login} from './components/Login';
import { UserProfile } from './components/UserProfile';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const LoginView = () => (
            <Login />
        );

        const DrawerView = () => (
            <DrawerLeft />
        );

        return (
            <Router>
                <div className="App">
                    <div>
                        {!localStorage.getItem('isLoggedIn') && <Route exact path="/" component={LoginView}/>}
                        {localStorage.getItem('isLoggedIn') && <Route exact path="/home" component={DrawerView}/>}
                        <Route exact path="/signup" component={UserProfile}/>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
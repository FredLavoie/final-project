import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
<main className="container">
    <div className="row">
        <div className="col m6">
            <h2 className="center-align">Login</h2>
            <p className="center-align"><strong><a href="/signup">Sign Up here</a></strong></p>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="pass" type="password" className="validate"/>
                            <label for="pass">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <p className="right-align">
                                <button className="btn btn-large waves-effect waves-light" type="button" name="action">Login</button>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>
        )
    }
}

export default Login


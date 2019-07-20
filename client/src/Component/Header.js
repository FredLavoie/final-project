import React, { Component } from 'react'
import Nav from './NavHome'

export class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <section className="summury-header container">
                    <h1>No food left behind !</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                    <a className="waves-effect waves-light btn-large">Browse deals</a>
                </section>
            </header>
            )
    }
}


export default Header

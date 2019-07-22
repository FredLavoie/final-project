import React, { Component } from 'react'
import Nav from '../Component/Nav';
import UpdateComponent from '../Component/Edit_deal';
import Footer from '../Component/Footer';


export class Edit_deal extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <UpdateComponent/>
                <Footer/>
            </div>
        )
    }
}

export default Edit_deal

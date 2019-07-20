import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <main className="main-merchant"> 
                <a class="waves-effect waves-light btn">Create New Deal</a>
                <p>Your Deals</p>
                <container className="title"> 
                <container classsName="image-container">
                    Image 
                    </container>
                <div>Product</div>
                <div>Quantity</div>
                <div>Price</div>
                </container>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>White Chocolate</div>
                <div>5</div>
                <div>$2.00</div>
                </container>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>Most amazing Chocolate Ever</div>
                <div>5</div>
                <div>$2.00</div>
                </container>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>Most amazing Chocolate Ever</div>
                <div>5</div>
                <div>$2.00</div>
                </container>

               
            </main>

            
        )
    }
}
export default Main


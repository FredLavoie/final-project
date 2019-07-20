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
                <container>
                    </container><div>Product</div>
                <div>Quantity</div>
                <div>Price</div>
                <div>Expiry Date</div>
                </container>
                <br></br>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>White Chocolate</div>
                <div>5</div>
                <div>$2.00</div>
                <div>09/01/2019</div>
                </container>
                <br></br>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>Most amazing Chocolate Ever</div>
                <div>5</div>
                <div>$2.00</div>
                <div>09/01/2019</div>
                </container>
                <br></br>
                <container className="title"> 
                <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
                <div>Most amazing Chocolate Ever</div>
                <div>5</div>
                <div>$2.00</div>
                <div>09/01/2019</div>
                </container>
                <br></br>

               
            </main>

            
        )
    }
}
export default Main


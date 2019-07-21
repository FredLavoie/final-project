import React, { Component } from 'react'

export class Main extends Component {
    render() {
        return (
            <main className="main-merchant"> 
                <a className="waves-effect waves-light btn">Create New Deal</a>
                <p>Your Deals</p>
        <table>
        <thead>
          <tr>
             <th>Image</th>
              <th>Product</th>
              <th>Quantity </th>
              <th>Price</th>
              <th>Expiry Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
            <container classsName="image-container">
                    <img className="responsive" src={this.props.deals.image_path}/> 
                    </container>
            </td>
            <td>{this.props.deals.name}</td>
            <td>{this.props.deals.quantity_available}</td>
            <td>{this.props.deals.current_price}</td>
            <td>09/10/19</td>
          </tr>
          <tr>
            <td>
            <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
            </td>
            <td>Salad</td>
            <td>10</td>
            <td>$3.76</td>
            <td>09/11/19</td>
          </tr>
          <tr>
            <td>
            <container classsName="image-container">
                    <img className="responsive" src="https://images.deliveryhero.io/image/fd-ca/LH/e3ng-listing.jpg?width=800&height=584"/> 
                    </container>
            </td>
            <td>Chocolate</td>
            <td>2</td>
            <td>$7.00</td>
            <td>08/01/2019</td>
          </tr>
        </tbody>
      </table> 

                

               
            </main>

            
        )
    }
}
export default Main


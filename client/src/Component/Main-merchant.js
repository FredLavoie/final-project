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
        </tbody>
      </table> 

                

               
            </main>

            
        )
    }
}
export default Main


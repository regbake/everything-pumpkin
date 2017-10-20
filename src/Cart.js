import React, { Component } from 'react';
import './App.css';

class Cart extends Component {
  render() {
    console.log(this.state.pumpkinData);
    return (
      <div className="container">
          <table style="width:50%">
              <tr>
                <th>Name</th>
                <th>Image <span id="disclaimer">*Actual pumpkin may vary</span></th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Polar Bear</td>
                <td><img src="http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw0c19e980/images/products/vegetables/02504_01_polarbear_sm_.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196" width="250"</td>
                <td>$24.99</td>
              </tr>
              <tr>
                <td>Munchkin</td>
                <td><img src="http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwc3bb7d14/images/products/vegetables/03075_01_munchkin.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196" width="250"</td>
                <td>$24.99</td>
              </tr>
              <tr>
                <td>Red October</td>
                <td><img src="http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw884d4015/images/products/vegetables/02595_01_redoctober.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196" width="250"</td>
                <td>$24.99</td>

              </tr>
              <tr>
                <td>Shipping:</td>
                <td></td>
                <td>$6.99</td>
              </tr>
              <tr>
                <td className="total">Total:</td>
                <td></td>
                <td className="total">$81.96</td>
              </tr>
            </table>
  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal">Complete Checkout</button>
  <div id="myModal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <h3>Checkout Complete!</h3>
          <h4>Thank you for shopping with Everything Pumpkins!</h4>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
        </div>
    </div>
  </div>
</div>
    )
  }
}


<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>

export default Cart;

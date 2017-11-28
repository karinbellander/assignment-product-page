import React from "react"

class Product extends React.Component{
  render () {
    return (

      <div className="productBox">
          {this.props.id}

          <div className="productName">{this.props.productName}
          </div>

          <div className="productImage"><img src={this.props.productImage} className="image"/></div>

          <div>
            <ul>
              <li>{this.props.productType}</li>
              <li>{this.props.productSubstance}</li>
              <li>{this.props.productSize}</li>
              <li>{this.props.productNumberInPack}</li>
            </ul>
          </div>

          <div>
            {this.props.productPrice}<p>kr</p>
            <p>Köp</p>
          </div>

          <div>{this.props.productDeliveryTime}</div>



      </div>
    )
  }
}

export default Product

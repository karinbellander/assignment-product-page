import React from "react"

class Product extends React.Component{
  render () {
    return (

      <div className="productBox">
          {this.props.id}

          <div className="productName">{this.props.productName}
          </div>

          <div className="productImage"><img src={this.props.productImage} className="image"/></div>

          <div className="productList">
            <ul>
              <li>{this.props.productType}</li>
              <li>{this.props.productSubstance}</li>
              <li>{this.props.productSize}</li>
              <li>{this.props.productNumberInPack} <p>st i förpackningen</p></li>
            </ul>
          </div>

          <div className="price-buy">
            <div className="price">{this.props.productPrice}<p>kr</p></div>
            <div className="buy"><a href=""><p>Köp</p></a></div>
          </div>

          <div className="delivery"><p>Leveranstid </p>{this.props.productDeliveryTime}</div>



      </div>
    )
  }
}

export default Product

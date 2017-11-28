import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")


console.log(productsJson)

class App extends React.Component {

  render() {
    return (
      <div className="App">


          <div className="productContainer">
            {productsJson.products.map((item) => {
              return <Product
                key={item.id}
                productName={item.name}
                productPrice={item.price}
                productType={item.type}
                productSize={item.size}
                productNumberInPack={item.number}
                productDeliveryTime={item.delivery}
                productImage={item.image}
                productSubstance={item.substance}
              />
            })}
          </div>


      </div>
    )
  }

}

export default App

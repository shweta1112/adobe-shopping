import React from "react";
import "./App.css";
import ItemCard from "./ItemCard";
import Cart from "./Cart";
class Home extends React.Component {
  render() {
    const { list, cartItems, addToCart, removeFromCart } = this.props;
    const totalItems = Object.values(cartItems).reduce((x, y) => x + y, 0);
    return (
      <div>
        <div className="header-wrapper">
          <div
            style={{
              fontWeight: "bold",
              color: "gray",
              textAlign: "left",
              flex: 4,
              padding: 10,
            }}
          >
            ALL Items
          </div>
          <div style={{ flex: 5 }}>
            <div className="header-added-item">
              {totalItems} items added in Cart
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="body">
          <div className="card-list">
            {list.map((item) => (
              <ItemCard item={item} key={item.id} addToCart={addToCart} />
            ))}
          </div>
          <div className="cart-detail">
            <Cart
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              list={list}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

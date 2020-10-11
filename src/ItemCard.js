import React from "react";
import "./App.css";

function ItemCard({ item, addToCart }) {
  return (
    <div className="item-card">
      <p className="discount-tag">{item.discount}%off</p>
      <div>
        <img className="img-item" src={item.image} alt="new" />
      </div>
      <div className="item-detail">
        <div className="item-name">{item.name}</div>
        <div className="price-wrapper">
          <div style={{ flex: 1 }}>
            <strike className="strike">
              <p className="item-price">{item.price.display}</p>
            </strike>
          </div>
          <div style={{ flex: 1 }}>{item.price.actual}</div>

          <div className="add-item">
            <button className="add-button" onClick={() => addToCart(item.id)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;

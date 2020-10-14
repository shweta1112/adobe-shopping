import React from "react";
import "./App.css";

class Cart extends React.Component {
  state = {};
  render() {
    const { cartItems, list, addToCart, removeFromCart } = this.props;
    const itemMap = list.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {});
    const totalItems = Object.values(cartItems).reduce((x, y) => x + y, 0);
    console.log("cartItems", cartItems);
    const totalPrice = Object.keys(cartItems)
      .map((id) => itemMap[id].price.actual * cartItems[id])
      .reduce((x, y) => x + y, 0);

    const totalDiscount = Math.round(
      Object.keys(cartItems)
        .map(
          (id) =>
            itemMap[id].price.actual *
            cartItems[id] *
            (itemMap[id].discount / 100)
        )
        .reduce((x, y) => x + y, 0)
    );

    console.log("cartitem:", cartItems);
    console.log("itemMap:", itemMap);
    return (
      <div>
        <div className="item-cart">
          <table>
            <tr>
              <th>Item({totalItems})</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>

            {Object.keys(cartItems).map((itemId) => {
              const item = itemMap[itemId];
              const quantity = cartItems[itemId];
              return (
                <tr key={itemId}>
                  <td>
                    <div className="name-img-wrapper">
                      <div>
                        <img
                          className="img-item-icon"
                          src={item.image}
                          alt="new"
                        />
                      </div>
                      <div className="item-name"> {item.name}</div>
                    </div>
                  </td>

                  <td>
                    <div className="add-remove-wrapper">
                      <div
                        className="remove-add"
                        onClick={() => removeFromCart(itemId)}
                      >
                        -
                      </div>
                      <div className="quantity-div">{quantity}</div>
                      <div
                        className="remove-add"
                        onClick={() => addToCart(itemId)}
                      >
                        +
                      </div>
                    </div>
                  </td>
                  <td>{item.price.actual * quantity}</td>
                </tr>
              );
            })}
          </table>
          <div className="item-price-details">
            <div className="price-table">
              <div className="total">Total</div>
              <div className="total-table-wrapper">
                <div className="total-items">
                  <div className="align">
                    <label>Items({totalItems})</label>
                  </div>
                  <div className="align-price">:</div>
                  <div className="align-last">{totalPrice}</div>
                </div>
                <div className="total-discount">
                  <div className="align">
                    <label>Discount</label>
                  </div>
                  <div className="align-price">:</div>
                  <div className="align-last">{totalDiscount}</div>
                </div>
                <div className="order-total">
                  <div className="align">
                    <label>Order Total</label>
                  </div>
                  <div className="align-price">:</div>
                  <div className="align-last">{totalPrice - totalDiscount}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

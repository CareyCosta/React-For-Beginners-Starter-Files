import React, { Fragment } from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === "available";
    if (!isAvailable) {
      return <li>Sorry {fish ? fish.name : "fish"} is no longer available</li>;
    }
    return (
      <li>
        {count} lbs {fish.name}
      </li>
    );
  };
  render() {
    const orderIDs = Object.keys(this.props.order);
    const total = orderIDs.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status == "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>ORDER</h2>
        <ul>{orderIDs.map(this.renderOrder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;

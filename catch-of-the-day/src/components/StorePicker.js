import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
//   constructor() {
//     super();
//     this.goToStore = this.goToStore.bind(this);
//   }

//   myInput = React.createRef();

//   goToStore(event) {
//     // stop form from submiting
//     event.preventDefault();
//     // get text from input
//     // change page to /store/whatever-they-entered
//   }

  myInput = React.createRef();

  goToStore = event => {
    // stop form from submiting
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.value;
    // change page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }
render() {
    return (
      <Fragment>
        <h1>Title</h1>
        <form className="store-selector" onSubmit={this.goToStore}>
          <p>Please Enter a Store</p>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          {/* values and inputs must be directly attached to state */}
          {/* include parenthesis when calling a function only if you want it to run when the componenet is mounted */}
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;

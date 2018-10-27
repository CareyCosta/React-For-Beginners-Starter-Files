import React, { Fragment } from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
            <h1>Title</h1>
            <form className="store-selector">
            <p>Please Enter a Store</p>
        <input type="text" required placeholder="Store Name" />
            <button type="submit">Visit Store</button>
        </form>
        </Fragment>
    );
    }
}

export default StorePicker;
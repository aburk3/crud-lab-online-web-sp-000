import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Review</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;

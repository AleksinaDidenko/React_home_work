import React, { Component } from "react";
import "./index.scss";

class Blocks extends Component {
  render() {
    const { items, column } = this.props;
    return (
      <div className="Blocks">
        <div className="BlocksInfo">
          <p>items:{items}</p>
         
          <p>column:{column}</p>
        </div>
      </div>
    );
  }
}
export default Blocks;

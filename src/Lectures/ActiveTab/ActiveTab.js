import React, { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./ActiveTab.scss";

export default class ActiveTab extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul className="tabs">
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <div className="contents">
          <First />
        </div>
      </div>
    );
  }
}

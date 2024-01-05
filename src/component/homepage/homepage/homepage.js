import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./homepage.style.scss";
import Menus from "../menu-item/menu-item";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      section: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 1,
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "Womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          size: "large",
        },
        {
          title: "Mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
          id: 5,
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <div className="homepage-container">
        {this.state.section.map(({ title, imageUrl, id, size }) => {
          return (
            <Menus key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}
export default Homepage;

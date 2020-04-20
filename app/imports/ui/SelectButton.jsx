import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { WikiItem } from "../api/wikiItem.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Button, Search } from "semantic-ui-react";
import SearchContent from "./SearchContent.jsx";
import SearchWikiItem from "./SearchWikiItem.jsx";

class SelectButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wikipedia: true,
    };
  }

  handleClickAPI(event) {
    event.preventDefault();
    this.setState({ wikipedia: true });
  }

  handleClickItem(event) {
    event.preventDefault();
    this.setState({ wikipedia: false });
  }

  render() {
    return (
      <div>
        <Button.Group>
          <Button
            toggle
            active={this.state.wikipedia}
            onClick={(e) => this.handleClickAPI(e)}
          >
            Search Wikipedia
          </Button>
          <Button.Or />
          <Button
            toggle
            active={!this.state.wikipedia}
            onClick={(e) => this.handleClickItem(e)}
          >
            Search Wiki Item
          </Button>
        </Button.Group>
        {this.state.wikipedia ? <SearchContent /> : <SearchWikiItem />}
      </div>
    );
  }
}
export default SelectButton;

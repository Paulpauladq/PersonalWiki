import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";
import { WikiItem } from "../api/wikiItem.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {
  Container,
  TextArea,
  Form,
  Segment,
  Modal,
  Popup,
  Button,
  Card,
  Image,
} from "semantic-ui-react";

const inlineStyle = {
  modal: {
    height: 500,
    marginTop: "0px !important",
    marginLeft: "auto",
    display: "inline-block !important",
    marginRight: "auto",
    marginBottom: "50px",
    position: "relative",
  },
};

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      title: "",
      content: "",
      picture: "",
      itemId: "",
    };
    this.renderMyWikiItems = this.renderMyWikiItems.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeInfo = this.handleChangeInfo.bind(this);
  }

  handleOpen(c) {
    console.log(c);
    this.setState({ title: c.wikiItem.title });
    this.setState({ content: c.wikiItem.contents.content });
    this.setState({ picture: c.wikiItem.contents.picture });
    this.setState({ itemId: c._id });
    this.setState({ modalOpen: true });
  }

  handleClose() {
    this.setState({ modalOpen: false });
    this.setState({ itemId: "" });
  }

  handleChangeInfo(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderMyWikiItems() {
    return this.props.myWikiItems.map((c) => (
      <Card key={c._id} className="centered">
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={c.wikiItem.contents.picture}
          />
          <Card.Header>{c.wikiItem.title}</Card.Header>
          <Card.Meta>Created at: {c.createdDate.toLocaleString()} </Card.Meta>
          <Card.Meta>
            Last Modified:{" "}
            {c.lastModified == undefined
              ? "Never"
              : c.lastModified.toLocaleString()}{" "}
          </Card.Meta>
          <Card.Description style={{ overflow: "auto", maxHeight: 250 }}>
            {c.wikiItem.contents.content}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              trigger={
                <Button basic color="green" onClick={() => this.handleOpen(c)}>
                  Edit
                </Button>
              }
              open={this.state.modalOpen}
              onClose={this.handleClose}
              style={inlineStyle.modal}
              size="tiny"
              closeIcon
            >
              <Modal.Header>Edit Wiki Item</Modal.Header>
              <Modal.Content>
                <Form size={"small"}>
                  <Form.Input
                    label={"Title"}
                    fluid
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Form.Field
                    control={TextArea}
                    name={"content"}
                    label="Content"
                    value={this.state.content}
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Form.Input
                    label={"Picture"}
                    name="picture"
                    value={this.state.picture}
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Button
                    type="submit"
                    positive
                    onClick={(e) => this.handleUpdate(e)}
                  >
                    Submit
                  </Button>
                </Form>
              </Modal.Content>
            </Modal>

            <Popup
              trigger={
                <Button basic color="red" role="button">
                  Delete
                </Button>
              }
              on="click"
              content={
                <Segment>
                  <p>Are your sure you want to delete?</p>
                  <Button
                    role="button"
                    size="mini"
                    content="Delete"
                    color="red"
                    onClick={() => this.handleDelete(c)}
                    aria-label="cancel-button"
                  />
                </Segment>
              }
            />
          </div>
        </Card.Content>
      </Card>
    ));
  }

  handleDelete(c) {
    console.log("delete clicked");

    Meteor.call("WikiItem.delete", c._id, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log("delelte successful");
    });
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log("edit clicked");
    const wikiItem = {
      title: this.state.title.trim(),
      contents: {
        content: this.state.content,
        picture: this.state.picture,
      },
    };

    Meteor.call("WikiItem.update", this.state.itemId, wikiItem, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    this.handleClose();
  }

  render() {
    return (
      <div>
        <Container>
          <Header />{" "}
          <Link to="/createWiki">
            <Button fluid>Create a new wiki item</Button>
          </Link>
          <br />
          <br />
          <Card.Group>{this.renderMyWikiItems()} </Card.Group>
          <br />
          <br />
          <br />
          <Link to="/app">
            <Button fluid>Back to main</Button>
          </Link>
          <Footer />
        </Container>
      </div>
    );
  }
}

MyPage.propTypes = {
  myWikiItems: PropTypes.arrayOf(PropTypes.object),
};
export default withTracker(() => {
  Meteor.subscribe("myWikiItem");

  return {
    myWikiItems: WikiItem.find({ authorId: Meteor.userId() }).fetch(),
  };
})(MyPage);

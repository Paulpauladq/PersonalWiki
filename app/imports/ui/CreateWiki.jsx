import React, { Component } from "react";
import { Button, Container, Form, Grid, TextArea } from "semantic-ui-react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Link, withRouter } from "react-router-dom";

class CreateWiki extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: "",
      title: "",
      content: "",
      picture: "",
    };
    this.handleChangeInfo = this.handleChangeInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInfo(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const wikiItem = {
      title: this.state.title.trim(),
      contents: {
        content: this.state.content,
        picture: this.state.picture,
      },
    };

    Meteor.call("WikiItem.insert", wikiItem, (error) => {
      if (error === undefined || error === null) {
        this.props.history.push("/mypage");
      } else {
        console.log(error);
      }

      this.setState({
        error: "",
      });
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Header />
          <Grid>
            <Grid.Row>
              <Grid.Column width={"16"}>
                <Form>
                  <Form.Input
                    required
                    label={"Title"}
                    fluid
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Form.Field
                    required
                    control={TextArea}
                    name={"content"}
                    label="Content"
                    value={this.state.content}
                    placeholder="Content"
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Form.Input
                    label={"Picture"}
                    name="picture"
                    value={this.state.picture}
                    placeholder="Picture url"
                    onChange={(e) => this.handleChangeInfo(e)}
                  />
                  <Link to="/mypage">
                    <Button positive>Back</Button>
                  </Link>
                  <Button
                    positive
                    disabled={!this.state.title || !this.state.content}
                    onClick={(e) => this.handleSubmit(e)}
                  >
                    Submit
                  </Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Footer />
        </Container>
      </div>
    );
  }
}

CreateWiki.propTypes = {
  history: PropTypes.object,
};
export default withRouter(CreateWiki);

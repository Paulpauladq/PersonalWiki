import React from "react";
import PropTypes from "prop-types";
import { Input, Form, Grid } from "semantic-ui-react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <Grid centered>
        <Grid.Column width={10}>
          <Form onSubmit={this.onFormSubmit.bind(this)}>
            <Form.Field>
              <Input
                id="searchBar"
                type="text"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                icon="search"
                placeholder="Search Wiki"
                aria-label="search"
                fluid
              />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

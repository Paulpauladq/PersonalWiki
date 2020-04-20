import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import SearchBar from "./SearchBar.jsx";
import { Card, Image, Container } from "semantic-ui-react";

class SearchContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchedResult: [], querry: "", noRes: false };
  }

  handleSearchItem(word) {
    console.log("searchItem");
    console.log(word);
    this.setState({ querry: word });
    Meteor.call("searchItem", word, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
      this.setState({ searchedResult: res });

      if (res.length == 0) {
        this.setState({ noRes: true });
      } else {
        this.setState({ noRes: false });
      }
    });
  }

  // render searched result
  renderResult() {
    if (this.state.noRes) {
      return (
        <div>
          <h2>No result match '{this.state.querry}'</h2>
        </div>
      );
    } else {
      return this.state.searchedResult.map((c) => (
        <Card key={c._id} className="centered">
          <Card.Content>
            <Card.Header>{c.wikiItem.title}</Card.Header>
            <Image size="small" src={c.wikiItem.contents.picture} />
            <Card.Meta>Created at: {c.createdDate.toLocaleString()} </Card.Meta>
            <Card.Meta>
              Last Modified:{" "}
              {c.lastModified == undefined
                ? "Never"
                : c.lastModified.toLocaleString()}{" "}
            </Card.Meta>
            <Card.Meta>Author: {c.author}</Card.Meta>
            <Card.Description style={{ overflow: "auto", maxHeight: 250 }}>
              {c.wikiItem.contents.content}
            </Card.Description>
          </Card.Content>
        </Card>
      ));
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchItem.bind(this)} />
        <br />
        <br />
        <Card.Group> {this.renderResult()}</Card.Group>
      </div>
    );
  }
}

export default SearchContent;

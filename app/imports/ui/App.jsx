import React from "react";
import SearchContent from "./SearchContent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TypingAnimation from "./TypingAnimation.jsx";
import { Container } from "semantic-ui-react";
import SelectButton from "./SelectButton.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header />

          <br />
          <br />

          <TypingAnimation />

          <br />

          {"  "}
          <SelectButton />

          <Footer />
        </Container>
      </div>
    );
  }
}

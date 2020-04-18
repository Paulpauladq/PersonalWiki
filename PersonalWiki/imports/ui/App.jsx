import React from "react";
import SearchContent from "./SearchContent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Container } from "semantic-ui-react";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Container>
					<Header />

					<br />
					
					<SearchContent />

					<Footer />
				</Container>
			</div>
		);
	}
}

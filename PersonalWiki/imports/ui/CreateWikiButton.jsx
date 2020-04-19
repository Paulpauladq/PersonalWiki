import React from "react";
import {Link} from "react-router-dom";
import { Button } from "semantic-ui-react";

export default class CreateWikiButton extends React.Component {
	render() {
		return  (
			<div id="createWikiButton">
				<Link className={"homepage-menu-button-wrapper"} to={"/createWiki"}>
				<Button className={"homepage-menu-button"}>Create a new wiki item</Button>
				</Link>
			</div>
		);
	}
}

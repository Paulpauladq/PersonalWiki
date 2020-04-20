import React from "react";
import { Icon, List } from "semantic-ui-react";

export default class AboutTheApp extends React.Component {
	render() {
		return (
			<div id="appIntro">
				<p id="appTitle">Personal Wiki</p>
				<List>
					<List.Item>
						<Icon name="search" size="big" />
						{" "} Search any wiki data
					</List.Item>
					<br />
					<List.Item>
						<Icon name="bolt" size="big" />
						Create your own wiki page
					</List.Item>
					<br />
					<List.Item>
						<Icon name="database" size="big" />
						Manage your own personal knowledgebase
					</List.Item>
				</List>
			</div>
		);
	}
}

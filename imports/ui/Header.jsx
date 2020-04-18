import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Menu } from "semantic-ui-react";
import "./style/header.css";

export default class Header extends React.Component {
	onLogout() {
		Accounts.logout();
	}

	render() {
		return (
			<Menu secondary size="large">
				<Menu.Menu>
					<Menu.Item>
						<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Wikipedia_svg_logo.svg/500px-Wikipedia_svg_logo.svg.png"
						className="App-logo"
						alt="logo"
						/>
					</Menu.Item>	
					<Menu.Item>
						<h2>Welcome to personal Wiki!</h2>
					</Menu.Item>					
				</Menu.Menu>
				<Menu.Menu position='right'>
					<Menu.Item>
						Welcome,{"  "}
						{Meteor.user() ? Meteor.user().username : "anonymous"}
					</Menu.Item>
            		<Menu.Item
						name="logout"
						onClick={this.onLogout.bind(this)}
						position="right"
					/>
          		</Menu.Menu>
			</Menu>
		);
	}
}

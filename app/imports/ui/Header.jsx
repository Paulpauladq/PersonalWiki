import React from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/header.css";

class Header extends React.Component {
	onLogout() {
		Accounts.logout();
	}

	onClick() {
		this.props.history.push("/mypage");
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
				</Menu.Menu>
				<Link to="/">
					<Menu.Item>
					<h2>Welcome to personal Wiki!</h2>
					</Menu.Item>
				</Link>	
				<Menu.Menu position='right'>
					<Menu.Item>
						Welcome,{"  "}
						{Meteor.user() ? Meteor.user().username : "anonymous"}
					</Menu.Item>
					
					<Menu.Item 
						name="My Page" 
						onClick={this.onClick.bind(this)}
					/>
						
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

Header.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Header);

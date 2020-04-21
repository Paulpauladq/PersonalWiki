import React, { Component } from "react";
import Typed from "typed.js";

export default class TypingAnimation extends Component {
	componentDidMount() {
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			strings: [
				"Search for: people",
				"Search for: definition",
				"Search for: entertainment",
				"Search for: arts and history",
				"Search for: any contents on wikipedia"
			],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
			smartBackspace: true
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		this.typed.destroy();
	}

	render() {
		return (
			<div className="wrap type-wrap">
				<img src="/book.png" height="25" width="25"></img>
				<span
					id="typingContent"
					style={{ whiteSpace: "pre" }}
					ref={el => {
						this.el = el;
					}}
				/>
			</div>
		);
	}
}
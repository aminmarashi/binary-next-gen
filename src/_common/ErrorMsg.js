import React, { PropTypes, Component } from 'react';
import M from '../_common/M';

export default class ErrorMsg extends Component {

	static propTypes = {
		shown: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	};

	render() {
		const { shown, text } = this.props;
		return shown ? <p className="errorfield"><M m={text} /></p> : <span />;
	}
}

import React from 'react';
import { connect } from 'react-redux';
import DurationCard from './DurationCard';

@connect(state => ({ tickTrade: state.tickTrade }))
export default class PayoutSelectorContainer extends React.Component {
	render() {
		return (
			<DurationCard {...this.props} />
		);
	}
}

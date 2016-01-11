import React from 'react';
import { connect } from 'react-redux';
import PayoutSelectorCard from './PayoutSelectorCard';

@connect(state => ({ tickTrade: state.tickTrade }))
export default class PayoutSelectorContainer extends React.Component {
	render() {
		return (
			<PayoutSelectorCard {...this.props} />
		);
	}
}

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement, add, subtract, storeResult, deleteResult } from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { subtract, storeResult, deleteResult } from '../../store/actions/actions';

class Counter extends Component {
	render () {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
				<CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
				<CounterControl label="Subtract 5" clicked={this.props.onSubtracttCounter}  />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
				<ul>
					{this.props.res.map(res => (
						<li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter,
		res: state.res.results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch(increment()),
		onDecrementCounter: () => dispatch(decrement()),
		onAddCounter: () => dispatch(add()),
		onSubtracttCounter: () => dispatch(subtract()),
		onStoreResult: (val) => dispatch(storeResult()),
		onDeleteResult: (id) => dispatch(deleteResult())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

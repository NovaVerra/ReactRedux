import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
	state = {
		
	}
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
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(5)),
		onSubtracttCounter: () => dispatch(actionCreators.subtract(5)),
		onStoreResult: (val) => dispatch(actionCreators.storeResult(val)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
		onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
		onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
		onAddCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
		onSubtracttCounter: () => dispatch({type: actionTypes.SUBTRACT, value: 5}),
		onStoreResult: (val) => dispatch({type: actionTypes.STORE_RESULT, val: val}),
		onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

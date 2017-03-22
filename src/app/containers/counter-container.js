import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CounterComponent } from '../components/counter-component';
import { increase, decrease } from '../actions/counterActions.js';

export class CounterPage extends Component {

    constructor(props) {
        super(props);
    }

    onIncrease = () => {
        event.preventDefault();
        this.props.onIncrease();
    }
    onDecrease = () => {
        event.preventDefault();
        this.props.onDecrease();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <CounterComponent
                        onIncrease={this.onIncrease}
                        onDecrease={this.onDecrease}
                        counter={this.props.counter} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: () => dispatch(increase()),
        onDecrease: () => dispatch(decrease()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
import React, { Component } from 'react';

export const CounterComponent = (props) => {

    return (
        <div>
            <div>
                <pre>{props.counter}</pre>
                <button onClick={props.onIncrease}>Increase</button>
                <button onClick={props.onDecrease}>Decrease</button>
            </div>
        </div>
    )
}

CounterComponent.propTypes = {
    counter: React.PropTypes.number,
    onIncrease: React.PropTypes.func,
    onDecrease: React.PropTypes.func    
};
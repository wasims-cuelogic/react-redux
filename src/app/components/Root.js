import React from 'react';
import Header from "./Header";
import FlashMessagesList from "./flash/FlashMessagesList";

export class Root extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {/*<FlashMessagesList />*/}
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
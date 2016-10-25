import React, { Component } from 'react';


class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'square'
        }
        this.initialLocalState = this.state;
    }

    resetLocalState(timeout) {
        setTimeout(() =>
            this.setState(this.initialLocalState)
        , timeout)
    }

    render() {
        const { match, id, active, onClick } = this.props;
        const localState = this.state;
        return(
            <div
                className={localState.className}
                id={id}
                onClick={(e) => {
                    if (active) {
                        if (match) {
                            onClick();
                            this.setState({ className: localState.className + ' correct'});
                        } else {
                            this.setState({ className: localState.className + ' incorrect'});
                        }
                    }
                    // timeout should match keyframe animation-duration in main.css
                    this.resetLocalState(800);
                }}
            >
            </div>
        );
    }
}

export default Square;

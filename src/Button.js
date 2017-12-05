import React from 'react';

class Button extends React.Component {

    handleClick = () => {
        this.props.whenClicked(this.props.toAdd)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.props.toAdd}
            </button>
        )
    }
}

export default Button;
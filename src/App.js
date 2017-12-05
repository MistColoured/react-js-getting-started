import React from 'react';
import Button from 'Button';
import Result from 'Result';

class App extends React.Component {

    state = {
        score: 12
    }

    incrementScore = (goingUp) => {
        this.setState((prevState) => ({
            score: prevState.score + goingUp
        }))
    }

    render () {
        return (
            <div>
                <Button whenClicked={this.incrementScore} toAdd={1}/>
                <Button whenClicked={this.incrementScore} toAdd={7}/>
                <Button whenClicked={this.incrementScore} toAdd={16}/>
                <Button whenClicked={this.incrementScore} toAdd={38}/>
                <Result displayScore={this.state.score}/>
            </div>
        )
    }
}

export default App;

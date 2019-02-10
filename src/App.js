import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
    Button,
    OrangeButton,
} from './Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        label: "0",
    }
  }

  click = (e) => {
    const val = e.target.innerHTML;
    const newState = this.state;

    if (val === 'AC') {
        newState.label = '0';
    }
    else if (val.match(/\d+/g)) {
        if (newState.label === "0") {
            newState.label = val;
        }
        else newState.label += val;
    }

    this.setState(newState)
  }

  buttons = [
    {name: 'AC'},
    {name: '%'},
    {name: '±'},
    {name: "÷", props: {
        classNames: ["orange"], 
    }},
    {name: '7'},
    {name: '8'},
    {name: '9'},
    {name: "x", props: {
        classNames: ["orange"], 
    }},
    {name: '4'},
    {name: '5'},
    {name: '6'},
    {name: "-", props: {
        classNames: ["orange"], 
    }},
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: "+", props: {
        classNames: ["orange"], 
    }},
    {name: '0', props: {
        classNames: ["double"], 
    }},
    {name: '.'},
    {name: "=", props: {
        classNames: ["orange"], 
    }},
  ]

  render() {
    return (
      <div className="App">
        <div className="display-block">
            <h1>{this.state.label}</h1>
        </div>
        <div className="buttons">
            {this.buttons.map((button, i) => {
                return <Button
                    clickEvt={this.click}
                    {...button.props}
                    key={i}
                >{button.name}</Button>
            })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Button from '../Components/Button';

import Display from '../Components/Display'

import './Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState };


    clearMemory() {
        this.setState({ ...initialState });
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '=';
            const currentOperation = this.state.operation;
            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.value[0];
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }


        if (this.state.displayValue.length >= 10) {
            alert("Valor máximo atingido");
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values })
        }

    }

    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={() => this.clearMemory()} triple ></Button>
                <Button label="/" click={setOperation} operation>/</Button>
                <Button label="7" click={addDigit}>7</Button>
                <Button label="8" click={addDigit}>8</Button>
                <Button label="9" click={addDigit}>9</Button>
                <Button label="*" click={setOperation} operation>*</Button>
                <Button label="4" click={addDigit}>4</Button>
                <Button label="5" click={addDigit}>5</Button>
                <Button label="6" click={addDigit}>6</Button>
                <Button label="-" click={setOperation} operation>-</Button>
                <Button label="1" click={addDigit}>1</Button>
                <Button label="2" click={addDigit}>2</Button>
                <Button label="3" click={addDigit}>3</Button>
                <Button label="+" click={setOperation} operation>+</Button>
                <Button label="0" click={addDigit} double>0</Button>
                <Button label="." click={addDigit} >.</Button>
                <Button label="=" click={setOperation} operation>=</Button>


            </div>
        )
    }
}


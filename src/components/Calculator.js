import React from 'react';
import Screen from './screen/screen';
import Button from './button/button';
import calculate from './logic/calculate';

import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
    };
  }

    showContent = (content) => {
      this.setState(() => ({ next: content }));
    }

    act = (opr) => {
      // console.log(operation)
      this.setState((state) => (calculate(state, opr)));
    }

    render() {
      const { next, total, operation } = this.state;

      const button = [
        { text: 'AC', type: 'normal' },
        { text: '+/-', type: 'normal' },
        { text: '%', type: 'normal' },
        { text: '÷', type: 'orange' },
        { text: '7', type: 'normal' },
        { text: '8', type: 'normal' },
        { text: '9', type: 'normal' },
        { text: 'x', type: 'orange' },
        { text: '4', type: 'normal' },
        { text: '5', type: 'normal' },
        { text: '6', type: 'normal' },
        { text: '-', type: 'orange' },
        { text: '1', type: 'normal' },
        { text: '2', type: 'normal' },
        { text: '3', type: 'normal' },
        { text: '+', type: 'orange' },
        { text: '0', type: 'normal double' },
        { text: '.', type: 'normal' },
        { text: '=', type: 'orange' },
      ];

      return (
        <div className="cover-area">
          <Screen info={next || operation || total} onChange={(e) => this.showContent(e.target.value)} />

          <div className="calculator-grid">
            {button.map((btn) => (
              <Button key={btn.text} text={btn.text} type={btn.type} act={this.act} />
            ))}
          </div>
        </div>
      );
    }
}

export default Calculator;

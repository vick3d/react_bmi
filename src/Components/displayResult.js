import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';


class DisplayResult extends Component {
  calculate() {
    let method = this.props.method;
    let weight= this.props.weight;
    let height= this.props.height;

    return bmiCalculation(weight, height, method);
  }

  render() {
    return (
    <div id='response'>
      {this.calculate()}
    </div>
  )}
}

export default DisplayResult
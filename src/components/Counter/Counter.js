import { Component } from 'react';
class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {};

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
        <button type="button" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;

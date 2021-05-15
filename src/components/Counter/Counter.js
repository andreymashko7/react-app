// import { Component } from 'react';
import { useReducer } from 'react';
import styles from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };

    case 'decrement':
      return { ...state, count: state.count - action.payload };

    default:
      throw new Error(`Unsupported action`);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Увеличить
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Уменьшить
      </button>
    </div>
  );
}

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };
//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {};

//   render() {
//     return (
//       <div>
//         <span>{this.state.value}</span>
//         <button type="button" onClick={this.handleIncrement}>
//           +
//         </button>
//         <button type="button" onClick={this.handleDecrement}>
//           -
//         </button>
//       </div>
//     );
//   }
// }

// export default Counter;

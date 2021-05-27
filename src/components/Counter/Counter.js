import Controls from './Control';
import Value from './Value';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import { getValue, getStep } from '../../redux/counter/counter-selectors';

export default function Counter() {
  const value = useSelector(getValue);
  const step = useSelector(getStep);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => dispatch(actions.increment(step))}
        onDecrement={() => dispatch(actions.decrement(step))}
      />
    </div>
  );
}

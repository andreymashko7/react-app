// import s from './Alert.module.css';
import PropTypes from 'prop-types';
import './Alert.css';
// import Alert from './Alert';

function Alert({ type = 'small', styles, classNames = '' }) {
  return (
    <div className={`box box-${type} ${classNames}`} style={styles}>
      box
    </div>
    // <p role="alert" className={s[type]}>
    //   {title}
    // </p>
  );
}

export default Alert;

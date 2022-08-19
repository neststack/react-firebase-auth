import React from 'react';

import styles from './InputControl.module.css';

const InputControl = (props) => {
  return (
    <div className={styles.container}>
      {props.label && <label htmlFor="">{props.label}</label>}
      <input type={props.type} {...props} />
    </div>
  );
};

export default InputControl;

import clsx from 'clsx';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const UIInput = ({
  label,
  id,
  type,
  onBlur,
  required,
  name,
  placeholder,
  value,
  onChange,
  onInput,
  onClick,
  error,
  ref,
}) => {
  return (
    <div className={styles.uiInput}>
      {label && <label htmlFor={id ? id : ''}>{label}</label>}
      <input
        id={id}
        type={type}
        onBlur={onBlur}
        name={name}
        required={required}
        onChange={onChange}
        onInput={onInput}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        className={clsx(styles.input, { [styles.error]: error })}
        ref={ref}
      />
      {type === 'search' && <FontAwesomeIcon icon={faMagnifyingGlass} />}
      {error && <span className={styles.errorTxt}>{error}</span>}
    </div>
  );
};

export default UIInput;

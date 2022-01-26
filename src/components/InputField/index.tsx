import { ComponentProps, useState, forwardRef } from 'react';
import s from './InputField.module.css';

export type Props = ComponentProps<'input'>;

export const InputField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { placeholder, className = '', onInput, onFocus, onBlur, children, ...restProps } = props;
  const [ value, setValue ] = useState(props.defaultValue ?? '');
  const [ isFocus, setIsFocus ] = useState(false);
  const [ error, setError ] = useState('');
  const labelClassName = `${s['input-field']} ${isFocus ? s['input-field_focus'] : ''} ${error ? s['input-field_error'] : ''}`;
  const inputClassName = `${className} ${s['input-field__input']} ${value ? s['input-field__input_fill'] : ''}`;

  return (
    <label className={labelClassName}>
      <input
        {...restProps}
        ref={ref}
        className={inputClassName}
        onFocus={(event) => {
          setIsFocus(true);
          onFocus && onFocus(event);
        }}
        onBlur={(event) => {
          setIsFocus(false);
          onBlur && onBlur(event);
        }}
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          setValue(target.value);
          setError(target.validationMessage);
          onInput && onInput(event);
        }}
      />
      <span className={s['input-field__placeholder']}>{placeholder}</span>
      {children}
    </label>
  );
});

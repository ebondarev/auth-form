import { forwardRef, useState } from 'react';
import { InputField, Props as InputFieldProps } from '../InputField';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import s from './InputPassword.module.css';

export const InputPassword = forwardRef<HTMLInputElement, Omit<InputFieldProps, 'type' | 'children'>>((props, ref) => {
  const { onInput, ...restProps } = props;
  const [ isShowPassword, setIsShowPassword ] = useState(false);
  const [ isShowButton, setIsShowButton ] = useState(Boolean(restProps.value || restProps.defaultValue));

  return (
    <InputField
      {...restProps}
      ref={ref}
      type={isShowPassword ? 'text' : 'password'}
      onInput={(event) => {
        setIsShowButton(Boolean((event.target as HTMLInputElement).value));
        onInput && onInput(event);
      }}
    >
      <button
        type="button"
        className={`${s.button} ${isShowButton ? '' : s.button_hide}`}
        onClick={() => setIsShowPassword(isShowPassword => !isShowPassword)}
        tabIndex={-1}
      >
        {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </button>
    </InputField>
  );
});

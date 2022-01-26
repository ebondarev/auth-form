import { FC, ComponentProps } from 'react';
import s from './Button.module.css';

type Props = ComponentProps<'button'>;

export const Button: FC<Props> = (props) => {
  const { children, className = '', ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${className} ${s.button}`}
    >{children}</button>
  );
};

import { FC, ComponentProps } from 'react';
import s from './Form.module.css';

type Props = ComponentProps<'form'> & {
  legend: string;
  fields: JSX.Element[];
};

export const Form: FC<Props> = (props) => {
  const { legend, fields, className = '', ...restProps } = props;
  const formClassName = `${className} ${s.form}`;

  return (
    <form {...restProps} className={formClassName}>
      <fieldset className={s.fieldset}>
        <legend className={s.legend}>{legend}</legend>
        <ul className={s.list}>
          {fields.map((field, index) => <li key={index} className={s.list__item}>{field}</li>)}
        </ul>
      </fieldset>
    </form>
  );
};

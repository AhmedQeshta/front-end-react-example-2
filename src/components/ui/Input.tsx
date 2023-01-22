import { FC } from 'react';

type InputProps = {
  type?: string;
  placeholder: string;
  className?: string;
};

export const Input: FC<InputProps> = ({
  type = 'text',
  placeholder,
  className = '',
  ...resProps
}) => {
  return <input type={type} placeholder={placeholder} className={className} {...resProps} />;
};

import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariants = 'secondary'| 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &{
  children: ReactNode;
  loading?: boolean;
  variant?:ButtonVariants;
  type?:string;
}

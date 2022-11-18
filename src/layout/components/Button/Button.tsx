import React, { ReactNode } from 'react'

import styles from './Button.module.scss';

interface ButtonProps {
  icon: ReactNode;
  title: string;
  variant: 'primary' | 'secondary'
}

export function Button({icon, title, variant}: ButtonProps) {
  return (
    <button className={`${styles.ButtonWrapper} ${styles[variant]}`}>
      {icon}
      <span>{title}</span>
    </button>
  )
}

import {ButtonHTMLAttributes, FC, MouseEvent} from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'
import {useNavigate} from "react-router-dom";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

export const Button: FC<ButtonProps> = ({className, children, onClick, href, ...otherProps}) => {
  const navigate = useNavigate()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (href !== undefined) {
      navigate(href)
    }

    onClick && onClick(event)
  }

  return (
    <button className={classNames(styles.button, className)} onClick={handleClick} {...otherProps}>
      {children}
    </button>
  )
}


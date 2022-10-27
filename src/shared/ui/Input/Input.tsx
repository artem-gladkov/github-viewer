import {ChangeEvent, FC, HTMLProps} from 'react'
import classNames from 'classnames'

import styles from './Input.module.scss'

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({className, onChange, ...otherProps}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(event.target.value, event)
  }

  return (
    <input className={classNames(styles.input, className)} onChange={handleChange} {...otherProps} />
  )
}


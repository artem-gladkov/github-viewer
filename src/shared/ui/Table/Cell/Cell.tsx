import {FC, HTMLProps, ReactElement} from 'react'
import classNames from 'classnames'

import styles from './Cell.module.scss'

export type TableCellValue = string | number | ReactElement

export interface CellProps extends HTMLProps<HTMLDivElement> {
  children: TableCellValue
}

export const Cell: FC<CellProps> = ({className, children, ...otherProps}) => {
  const value = !children && children !== 0 ? '—' : children

  return (
    <div className={classNames(styles.cell, className)} {...otherProps}>
      {value}
    </div>
  )
}


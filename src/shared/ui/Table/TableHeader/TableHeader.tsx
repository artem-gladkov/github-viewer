import {FC, HTMLProps } from 'react'
import classNames from 'classnames'

import styles from './TableHeader.module.scss'
import {Cell} from '../Cell'


export interface TableColumn {
  title: string,
  accessor: string
}

export interface TableHeaderProps extends HTMLProps<HTMLDivElement> {
  columns: TableColumn[]
}

export const TableHeader: FC<TableHeaderProps> = ({className, children, columns, ...otherProps}) => {
  return (
    <div className={classNames(styles.header, className)} {...otherProps}>
      {columns.map(({title, accessor}) => (
        <Cell key={accessor}>{title}</Cell>
      ))}
    </div>
  )
}


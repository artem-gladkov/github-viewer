import {FC, useMemo} from 'react'
import classNames from 'classnames'

import styles from './Table.module.scss'
import {TableColumn, TableHeader} from "./TableHeader";
import {Row, RowProps} from "./Row";

export interface TableRow extends Omit<RowProps, 'columns'>{}

export interface TableProps {
  className?: string,
  columns: TableColumn[],
  rows: TableRow[]
}

export const Table: FC<TableProps> = ({className, columns, rows, ...otherProps}) => {
  return (
    <div className={classNames(styles.table, className)}>
      <TableHeader columns={columns}/>
      <div className={styles.body}>
        {rows.map(row => <Row {...row} columns={columns}/>)}
      </div>
    </div>
  )
}


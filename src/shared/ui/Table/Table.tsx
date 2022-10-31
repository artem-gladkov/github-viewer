import {FC} from 'react'
import classNames from 'classnames'

import styles from './Table.module.scss'
import {TableColumn, TableHeader} from "./TableHeader";
import {Row, RowProps} from "./Row";
import {Empty} from "../Empty";

export interface TableRow extends Omit<RowProps, 'columns'> {
}

export interface TableProps {
  className?: string,
  columns: TableColumn[],
  rows: TableRow[]
}

export const Table: FC<TableProps> = ({className, columns, rows, ...otherProps}) => {
  const isEmpty = rows.length === 0

  return (
    <div className={classNames(styles.table, className)}>
      <TableHeader columns={columns}/>
      <div className={classNames(styles.body, {[styles.empty]: isEmpty})}>
        {isEmpty
          ? <Empty text='Таблица пуста'/>
          : rows.map(row => <Row columns={columns} {...row} />)
        }
      </div>
    </div>
  )
}


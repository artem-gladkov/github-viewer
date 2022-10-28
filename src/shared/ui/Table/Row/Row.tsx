import {FC, MouseEvent, useMemo} from 'react'

import styles from './Row.module.scss'
import {Cell, TableCellValue} from '../Cell';
import {TableColumn} from "../TableHeader";
import classNames from 'classnames';

export interface RowProps {
  key: string
  cells: {
    [key: string]: TableCellValue
  }
  columns: TableColumn[]
  onClick?: (row: RowProps, event: MouseEvent<HTMLDivElement>) => void
}

export const Row: FC<RowProps> = (rowProps) => {
  const {onClick, cells, columns} = rowProps

  const rowCells = useMemo(() => {
    return Object.entries(cells).reduce((accum: TableCellValue[], [key, value]) => {
      const cellIndex = columns.findIndex(col => key === col.accessor)

      if (cellIndex !== -1) {
        accum[cellIndex] = value
      }

      return accum
    }, [])
  }, [cells, columns])


  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onClick && onClick(rowProps, event)
  }

  return (
    <div
      className={classNames(styles.row, {[styles.clickable]: !!onClick})}
      onClick={handleClick}
    >
      {rowCells.map((cell, cellIndex) =>
        <Cell key={`${cellIndex}`}>{cell}</Cell>
      )}
    </div>
  )
}


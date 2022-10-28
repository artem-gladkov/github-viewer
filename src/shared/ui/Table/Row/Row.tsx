import {FC, MouseEvent} from 'react'

import styles from './Row.module.scss'
import {Cell, TableCellValue} from '../Cell';
import {TableColumn} from "../TableHeader";

export interface RowProps {
  key: string
  cells: {
    [key: string]: TableCellValue
  }
  columns: TableColumn[]
  onClick?: (row: RowProps, event: MouseEvent<HTMLDivElement>) => void
}

export const Row: FC<RowProps> = (rowProps) => {
  const {key, onClick, cells, columns} = rowProps

  let rowCells: TableCellValue[] = []

  Object.entries(cells).forEach(([key, value]) => {
    const cellIndex = columns.findIndex(col => key === col.accessor)
    rowCells[cellIndex] = value
  })

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    onClick && onClick(rowProps, event)
  }

  return (
    <div key={key} className={styles.row} onClick={handleClick}>
      {rowCells.map((cell, cellIndex) =>
        <Cell key={`${key}_${cellIndex}`}>{cell}</Cell>
      )}
    </div>
  )
}


import { FC } from 'react'
import classNames from 'classnames'

import styles from './Empty.module.scss'

export interface EmptyProps {
  className?: string
  text?: string
}

export const Empty: FC<EmptyProps> = ({text = 'Пусто', className}) => {
    return (
        <div className={classNames(styles.empty, className)}>
          <div className={styles.text}>
            {text}
          </div>
        </div>
    )
}


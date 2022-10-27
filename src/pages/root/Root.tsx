import {FC} from 'react'
import classNames from 'classnames'

import styles from './Root.module.scss'
import { Outlet } from 'react-router-dom'

export interface RootProps {
}

export const Root: FC<RootProps> = ({...otherProps}) => {
  return (
    <div className={classNames(styles.root)} {...otherProps}>
      <Outlet />
    </div>
  )
}


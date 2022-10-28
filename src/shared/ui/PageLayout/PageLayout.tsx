import {FC} from 'react'
import {Outlet} from 'react-router-dom'

import styles from './PageLayout.module.scss'

export const PageLayout: FC = () => {
  return (
    <div className={styles.root}>
      <Outlet/>
    </div>
  )
}


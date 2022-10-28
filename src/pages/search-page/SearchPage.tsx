import {FC} from 'react'
import {UserSearchForm} from "../../features/search-user";

import styles from './SearchPage.module.scss'

export const SearchPage: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.body}>
        <h1 className={styles.logo}>Github Viewer</h1>
        <UserSearchForm/>
      </div>
    </div>
  )
}


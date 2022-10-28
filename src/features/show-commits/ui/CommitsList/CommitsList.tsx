import {FC, useState} from 'react'
import classNames from 'classnames'

import styles from './CommitsList.module.scss'
import {Loader, Table, Widget} from "../../../../shared";
import {observer} from "mobx-react-lite";
import {CommitsListStore} from "../../model";
import {COMMITS_LIST_COLUMNS} from "../../constants";
import {ButtonBack} from "../../../../shared/ui/ButtonBack";

export interface CommitsListProps {
  username: string,
  repository: string
  className?: string,
}

export const CommitsList: FC<CommitsListProps> = observer(({className, username, repository, ...otherProps}) => {
  const [{tableRows, isFetching}] = useState(() => new CommitsListStore(username, repository))

  return (
    <div className={classNames(styles.commitsList, className)} {...otherProps}>
      <Widget>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <ButtonBack/>
            <h1>Коммиты репазитория "{username}"</h1>
          </div>
          {
            isFetching
              ? <Loader/>
              : <Table columns={COMMITS_LIST_COLUMNS} rows={tableRows}/>
          }
        </div>
      </Widget>
    </div>
  )
})


import {FC, useState} from 'react'

import styles from './RepositoriesList.module.scss'
import {Loader, Table, Widget} from "../../../../shared";
import {observer} from "mobx-react-lite";
import {RepositoriesListStore} from "../../model";
import {REPOSITORIES_LIST_COLUMNS} from "../../constants";
import {useNavigate} from "react-router-dom";

export interface RepositoriesListProps {
  username: string
}

export const RepositoriesList: FC<RepositoriesListProps> = observer(({username, ...otherProps}) => {
  const navigate = useNavigate()
  const [{isFetching, tableRows}] = useState(() => new RepositoriesListStore(username, navigate))

  return (
    <div className={styles.repositoriesList} {...otherProps}>
      <Widget>
        <div className={styles.wrapper}>
          <h1>Репозитории пользователя "{username}"</h1>
          {isFetching
            ? <Loader/>
            : <Table
                columns={REPOSITORIES_LIST_COLUMNS}
                rows={tableRows}
            />
          }
        </div>
      </Widget>
    </div>
  )
})


import {FC, useState} from 'react'

import styles from './RepositoriesList.module.scss'
import {Loader, Table, Widget} from "../../../../shared";
import {observer} from "mobx-react-lite";
import {RepositoriesListStore} from "../../model";
import {REPOSITORIES_LIST_COLUMNS} from "../../constants/repositories-list-columns";

const TEST_ROWS = [{
  title: 'Первое название',
  languages: 'Java',
  description: 'Первый проект на Java',
  stars: '0'
}, {
  title: 'Второе название',
  languages: 'Javascript',
  description: 'Второй проект на JavaScript',
  stars: '10'
}, {
  title: 'Второе название',
  languages: 'Javascript',
  description: 'Второй проект на JavaScript',
  stars: '10'
}, {
  title: 'Второе название',
  languages: 'Javascript',
  description: 'Второй проект на JavaScript',
  stars: '10'
}, {
  title: 'Второе название',
  languages: 'Javascript',
  description: 'Второй проект на JavaScript',
  stars: '10'
}]

export interface RepositoriesListProps {
  username: string
}

export const RepositoriesList: FC<RepositoriesListProps> = observer(({username, ...otherProps}) => {
  const [{isFetching, tableRows}] = useState(() => new RepositoriesListStore(username))

  return (
    <div className={styles.repositoriesList} {...otherProps}>
      <Widget>
        <h2>Cписок проектов</h2>
        {isFetching
          ? <Loader/>
          : <Table
            columns={REPOSITORIES_LIST_COLUMNS}
            rows={tableRows}
          />
        }
      </Widget>
    </div>
  )
})


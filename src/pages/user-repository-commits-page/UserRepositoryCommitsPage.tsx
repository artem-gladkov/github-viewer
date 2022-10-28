import {FC} from 'react'

import styles from './UserRepositoryCommitsPage.module.scss'
import {useParams} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import {CommitsList} from "../../features/show-commits";

export const UserRepositoryCommitsPage: FC = observer(() => {
  const {username = '', repositoryName = ''} = useParams<{ username: string, repositoryName: string }>()

  return (
    <div className={styles.page}>
      <CommitsList username={username} repository={repositoryName} />
    </div>
  )
})

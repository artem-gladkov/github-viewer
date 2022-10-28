import {FC, useState} from 'react'
import {UserInfoView} from "../../features/show-user-info";
import {RepositoriesList} from "../../features/show-repositories";

import styles from './UserPage.module.scss'
import {useParams} from "react-router-dom";
import {UserStore} from "../../entities/user";
import {Loader} from "../../shared";
import {observer} from 'mobx-react-lite';
import {UserSearchForm} from '../../features/search-user';

export const UserPage: FC = observer(() => {
  //TODO ''
  const {username = ''} = useParams<{ username: string }>()
  const [{isUserExist, isFetching, baseUserInfo}] = useState(() => new UserStore(username))

  return (
    <div className={styles.page}>
      <UserSearchForm/>
      {
        isFetching
          ? <Loader/>
          : isUserExist
            ? <div className={styles.body}>
              <UserInfoView userInfo={baseUserInfo}/>
              <RepositoriesList username={username}/>
            </div>
            : <div>Пользователя не существует</div>
      }
    </div>
  )
})

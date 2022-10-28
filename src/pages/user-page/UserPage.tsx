import {FC, useEffect, useState} from 'react'
import {UserInfoView} from "../../features/show-user-info";
import {RepositoriesList} from "../../features/show-repositories";

import styles from './UserPage.module.scss'
import {Outlet, useParams} from "react-router-dom";
import {UserStore} from "../../entities/user";
import {Empty, Loader} from "../../shared";
import {observer} from 'mobx-react-lite';
import {UserSearchForm} from '../../features/search-user';

export const UserPage: FC = observer(() => {
  const {username = ''} = useParams<{ username: string }>()
  const [{isUserExist, isFetching, baseUserInfo, updateUser}] = useState(() => new UserStore(username))

  useEffect(() => {
    updateUser(username)
  }, [username])

  return (
    <div className={styles.page}>
      <UserSearchForm/>
      {
        isFetching
          ? <Loader/>
          : isUserExist
            ? <div className={styles.body}>
              <UserInfoView userInfo={baseUserInfo}/>
              <Outlet/>
            </div>
            : <Empty text={`Увы, пользователя с ником "${username}" не существует :с`} />
      }
    </div>
  )
})

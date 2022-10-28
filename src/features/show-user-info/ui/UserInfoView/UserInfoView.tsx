import {FC, HTMLProps, useState} from 'react'
import classNames from 'classnames'

import styles from './UserInfoView.module.scss'
import {BaseUserInfo, UserStore} from "../../../../entities/user";
import {Loader, Widget} from '../../../../shared';
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

export interface UserInfoProps {
  className?: string,
  userInfo: BaseUserInfo
}

export const UserInfoView: FC<UserInfoProps> = observer(({className, userInfo: {username, avatarImage}}) => {
  return (
    <div className={classNames(styles.userInfo, className)}>
      <Widget>
        <div className={styles.image}>
          <img src={avatarImage} alt={username}/>
        </div>
        <h2>Пользовател: {username}</h2>
      </Widget>
    </div>
  )
})


import {FC} from 'react'
import classNames from 'classnames'

import styles from './UserInfoView.module.scss'
import {BaseUserInfo} from "../../../../entities/user";
import { Widget} from '../../../../shared';
import {observer} from "mobx-react-lite";
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


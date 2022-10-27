import {FC, HTMLProps, useCallback, useState} from 'react'
import classNames from 'classnames'

import styles from './UserSearchString.module.scss'
import {observer} from "mobx-react-lite";
import {UserSearchStore} from "../../model";
import {Button, Input} from "../../../../shared";
import {useSearchParams} from "react-router-dom";


export enum ESearchParams {
  TEXT = 'text'
}

export interface UserSearchStringProps extends HTMLProps<HTMLFormElement> {
}

export const UserSearchString: FC<UserSearchStringProps> = observer(({className, children, ...otherProps}) => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const [{
    searchText,
    onSubmitSearchForm,
    updateSearchText
  }] = useState(() => new UserSearchStore(urlSearchParams.get(ESearchParams.TEXT)))

  const onChangeSearchText = useCallback((value: string): void => {
    const newUrlSearchParams = new URLSearchParams()

    if (value !== '') {
      newUrlSearchParams.append(ESearchParams.TEXT, value)
    }

    setUrlSearchParams(newUrlSearchParams)
    updateSearchText(value)
  }, [setUrlSearchParams, updateSearchText])

  return (
    <form
      onSubmit={onSubmitSearchForm}
      className={classNames(styles.userSearchString, className)}
      {...otherProps}
    >
      <Input
        value={searchText}
        onChange={onChangeSearchText}
        placeholder='Введите логин пользоваетеля, например, artem-gladkov'
      />
      <Button type='submit'>
        Найти
      </Button>
    </form>
  )
})


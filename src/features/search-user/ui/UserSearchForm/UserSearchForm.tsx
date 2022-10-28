import {FC, FormEvent, HTMLProps, useCallback, useState} from 'react'
import classNames from 'classnames'

import styles from './UserSearchForm.module.scss'
import {observer} from "mobx-react-lite";
import {UserSearchStore} from "../../model";
import {Button, Input} from "../../../../shared";
import {useNavigate, useSearchParams} from "react-router-dom";
import {PATHS} from "../../../../pages/router/constants";


export enum ESearchParams {
  TEXT = 'text'
}

export interface UserSearchFormProps extends HTMLProps<HTMLFormElement> {
}

export const UserSearchForm: FC<UserSearchFormProps> = observer(({
  className,
  children,
  ...otherProps
}) => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [{
    searchText,
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

  const onSubmitSearchForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/users/${searchText}?${urlSearchParams}`, {replace: true})
  }

  return (
    <form
      onSubmit={onSubmitSearchForm}
      className={classNames(styles.form, className)}
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


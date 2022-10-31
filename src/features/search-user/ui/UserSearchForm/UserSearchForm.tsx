import {FC, FormEvent, HTMLProps, useCallback, useState} from 'react'
import classNames from 'classnames'

import styles from './UserSearchForm.module.scss'
import {observer} from "mobx-react-lite";
import {Button, Input} from "../../../../shared";
import {useNavigate, useSearchParams} from "react-router-dom";

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
  const [searchText, setSearchText] = useState(urlSearchParams.get(ESearchParams.TEXT) || '')
  const navigate = useNavigate()

  const onChangeSearchText = useCallback((value: string): void => {
    const newUrlSearchParams = new URLSearchParams()

    if (value !== '') {
      newUrlSearchParams.append(ESearchParams.TEXT, value)
    }

    setUrlSearchParams(newUrlSearchParams)
    setSearchText(value)
  }, [setUrlSearchParams, setSearchText])

  const onSubmitSearchForm = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(searchText && searchText !== '') {
      navigate(`/users/${searchText}/repositories?${urlSearchParams}`)
    }
  }, [navigate, urlSearchParams, searchText])

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
      <Button type='submit' disabled={!searchText}>
        Найти
      </Button>
    </form>
  )
})


import {makeAutoObservable} from "mobx";
import {FormEvent} from "react";
import {fetchUser} from "../api";

export class UserSearchStore {
  private _searchText: string = ''

  constructor(initSearchText?: string | null) {
    makeAutoObservable(this)
    initSearchText && this.updateSearchText(initSearchText)
  }

  private searchUser = async (): Promise<void> => {
    console.log(this.searchText)
    try {
      const user = await fetchUser(this.searchText)
      console.log(user)
    } catch (e) {
      console.log(e)
    }
  }

  onSubmitSearchForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.searchUser()
  }

  public updateSearchText = (value: string): void => {
    this._searchText = value
  }

  public get searchText (): string {
    return this._searchText
  }
}

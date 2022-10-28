import {makeAutoObservable} from "mobx";
import {BaseUserInfo, UserData} from "../types";
import {fetchUser} from "../api";
import {DEFAULT_USER_INFO} from "../constants";

export class UserStore {
  private _userData: UserData | undefined

  private _isFetching: boolean = true

  constructor(private _username: string) {
    makeAutoObservable(this)

    this.updateUser(_username)
  }

  public updateUser = (newUserName: string) => {
    this._username = newUserName
    this.resetUserData()
    this.fetchUserData()
  }

  private resetUserData = () => {
    this.userData = undefined
  }

  private fetchUserData = async (): Promise<void> => {
    this.isFetching = true

    try {
      this.userData = await fetchUser(this._username)
    } catch (e) {
      //TODO log
      console.log(e)
    } finally {
      this.isFetching = false
    }
  }


  public get baseUserInfo(): BaseUserInfo {
    return !!this._userData ? {
        avatarImage: this._userData.avatar_url,
        username: this._userData.login
      } : DEFAULT_USER_INFO
  }

  private set userData(value: UserData | undefined) {
    this._userData = value
  }

  private set isFetching(value: boolean) {
    this._isFetching = value
  }

  public get isFetching(): boolean {
    return this._isFetching
  }

  public get isUserExist(): boolean {
    return !!this._userData
  }
}

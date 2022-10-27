import {makeAutoObservable} from "mobx";

export class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
}

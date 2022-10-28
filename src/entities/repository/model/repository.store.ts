import {makeAutoObservable} from "mobx";

export class RepositoryStore {
  constructor() {
    makeAutoObservable(this)
  }
}

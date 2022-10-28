import {makeAutoObservable, toJS} from "mobx";
import {fetchUserPublicRepositories, Repository} from "../../../entities/repository";
import {TableRow} from "../../../shared";

export class RepositoriesListStore {
  private _repositories: Repository[] = []

  private _isFetching: boolean = true

  constructor(private _username: string) {
    makeAutoObservable(this)

    this.init()
  }

  private init = async (): Promise<void> => {
    this.isFetching = true

    try {
      this.repositories = await fetchUserPublicRepositories(this._username)
      console.log(toJS(this._repositories))
    } catch (e) {
      // TODO log
      console.log(e)
    } finally {
      this.isFetching = false
    }
  }

  private set repositories(value: Repository[]) {
    this._repositories = value
  }

  private set isFetching(value: boolean) {
    this._isFetching = value
  }

  public get isFetching(): boolean {
    return this._isFetching
  }

  public get tableRows(): TableRow[] {
    return this._repositories.map(({name, language, stargazers_count, description}) => {
      console.log()
      return {
      key: name,
      onClick: (row) => {
        console.log(row)
      },
      cells: {
        title: name,
        description: description || '',
        languages: language,
        starsCount: stargazers_count
      }
    }})
  }
}

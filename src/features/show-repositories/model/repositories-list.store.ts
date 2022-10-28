import {makeAutoObservable, toJS} from "mobx";
import {fetchUserPublicRepositories, Repository} from "../../../entities/repository";
import {TableRow} from "../../../shared";
import {NavigateFunction} from "react-router-dom";
import {PATHS} from "../../../pages/router/constants";

export class RepositoriesListStore {
  private _repositories: Repository[] = []

  private _isFetching: boolean = true

  constructor(private _username: string, private _navigate: NavigateFunction) {
    makeAutoObservable(this)

    this.init()
  }

  private init = async (): Promise<void> => {
    this.isFetching = true

    try {
      this.repositories = await fetchUserPublicRepositories(this._username)
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
    return this._repositories.map(({name, language, stargazers_count, description}) => ({
      key: name,
      onClick: () => {
        this._navigate(`/users/${this._username}/${name}/commits`)
      },
      cells: {
        title: name,
        description: description || '',
        languages: language,
        starsCount: stargazers_count
      }
    }))
  }
}

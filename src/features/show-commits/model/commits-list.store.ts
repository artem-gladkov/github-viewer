import {makeAutoObservable, toJS} from "mobx";
import {formatDateToISO, TableRow} from "../../../shared";
import {Commit, fetchRepositoryCommits} from "../../../entities/commit";

export class CommitsListStore {
  private _commits: Commit[] = []

  private _isFetching: boolean = true

  constructor(private _username: string, private _repository: string) {
    makeAutoObservable(this)

    this.init()
  }

  private init = async (): Promise<void> => {
    this.isFetching = true

    try {
      this.commits = await fetchRepositoryCommits(this._username, this._repository)
    } catch (e) {
      // TODO log
      console.log(e)
    } finally {
      this.isFetching = false
    }
  }

  private set commits(value: Commit[]) {
    this._commits = value
  }

  private set isFetching(value: boolean) {
    this._isFetching = value
  }

  public get isFetching(): boolean {
    return this._isFetching
  }

  public get tableRows(): TableRow[] {
    return this._commits.map(({commit: {committer: {name, date}}, sha}) => {
      return {
        key: sha,
        cells: {
          author: name,
          hash: sha,
          date: formatDateToISO(new Date(date)),
        }
      }
    })
  }
}

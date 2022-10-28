import {httpClient} from "../../../shared";
import { Commit } from "../types";

export function fetchRepositoryCommits(username:string, repositoryName: string): Promise<Commit[]> {
  return httpClient.get(`repos/${username}/${repositoryName}/commits`).then(resp => resp.data)
}

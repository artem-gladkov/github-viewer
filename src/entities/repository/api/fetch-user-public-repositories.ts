import {httpClient} from "../../../shared";
import {Repository} from "../types";

export function fetchUserPublicRepositories(username: string): Promise<Repository[]> {
  return httpClient.get(`/users/${username}/repos`).then(resp => resp.data)
}

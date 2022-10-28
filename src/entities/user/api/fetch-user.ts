import {httpClient} from "../../../shared";
import {UserData} from "../types";

export function fetchUser(username: string): Promise<UserData> {
  return httpClient.get(`users/${username}`).then(resp => resp.data)
}

import { httpClient } from '../../../shared';

export interface User {}

export const fetchUser = (username: string): Promise<User> => {
  return httpClient.get(`users/${username}`).then((response) => response.data);
};

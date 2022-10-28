export interface Commit {
  commit: {
    committer: {
      name: string,
      date: string
    }
  },
  sha: string
  [key: string]: any
}

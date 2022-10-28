export interface Repository{
  name: string,
  description: string | null,
  languages: { [key: string]: number },
  language: string,
  stargazers_count: number
  [key: string]: any
}

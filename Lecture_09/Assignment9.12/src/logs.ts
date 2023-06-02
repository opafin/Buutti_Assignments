export interface Logs {
  time: string
  method: string
  path: string
  params?: object
  body?: object
  difference?: string
}

export let logs: Logs[] = []

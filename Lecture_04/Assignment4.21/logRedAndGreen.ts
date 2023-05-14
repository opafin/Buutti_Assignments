export function logError(message: string): string {
  const red = '\x1b[31m'
  const reset = '\x1b[0m'
  return red + message + reset
}

export function logSuccess(message: string) {
  const green = '\x1b[32m'
  const reset = '\x1b[0m'
  return green + message + reset
}

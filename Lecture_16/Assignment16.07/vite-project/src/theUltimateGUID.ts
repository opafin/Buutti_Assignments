export let guid = 0

export function theUltimateGUID() {
  guid = guid + 1
  return guid
}

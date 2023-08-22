export function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null)
    }, timeout)
  })
}

export function getAssets(name) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

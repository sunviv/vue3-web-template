

export function createViteProxy(mode, isOpenProxy = true) {
  if (!isOpenProxy) return
  const proxySettings = {
    development: {
      url: 'http://192.168.196.184:19800/',
      urlPattern: '/dev-api',
      // secondUrl: 'http://apis.juhe.cn',
      // secondUrlPattern: '/weather'
    },
    production: {
      url: 'http://192.168.196.184:19800/',
      urlPattern: '/prod-api',
      // secondUrl: 'http://apis.juhe.cn',
      // secondUrlPattern: '/weather'
    },
  }
  const proxySetting = proxySettings[mode]
  const proxy = {
    [proxySetting.urlPattern]: {
      target: proxySetting.url,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${proxySetting.urlPattern}`), '')
    },
    [proxySetting.secondUrlPattern]: {
      target: proxySetting.secondUrl,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${proxySetting.secondUrlPattern}`), '')
    }
  }
  return proxy
}
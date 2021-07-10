import ax from 'axios'

let axios: any = ax.create()
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_NEWS_API_KEY}`
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"
axios.interceptors.request.use((req: any, test: any) => {
  return req
}, (error: any) => Promise.reject(error))

export {
  axios,
}

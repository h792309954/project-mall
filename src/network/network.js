import axios from 'axios'
// ES6 Promise的封装
export function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象
    const instance = axios.create({
      baseURL : "http://127.0.0.1",
      //##### Interface of backend data source has been changed
      //To get interface : wechat coderwhy001
      timeout: 5000
    })

    // 过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(options)
        .then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
    })
  })
}

// ES5封装方式
// export function request(options, success, failure) {
//   // 1.创建axios的实例对象
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 过滤器(拦截器)
//   instance.interceptors.response.use(res => {
//     return res.data
//   })
//
//   // 通过实例发送网络请求
//   instance(options)
//       .then(res => {
//         success(res)
//       }).catch(err => {
//         failure(err)
//       })
// }

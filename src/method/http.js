import axios from 'axios'
import {
  message
} from 'antd'
class Http {
  //所有return 都是返回确切的值
  static baseUrl = 'https://www.easy-mock.com/mock/5c9389c2933c7c3297e517a4/blog'
  static getActicle(showMsg) {
    let url = this.baseUrl
    return new Promise(function (resolve, reject) {
      //封装保证主体代码里面没有if else
      axios
        .get(`${url}/acticle`)
        .then((res) => {
          if (res.state = 200) {
            if (showMsg) {
              message.success('欢迎你')
            }
            resolve(res.data.data.list)
          }
          resolve([])
        })
        .catch((err) => {
          message.error(`${err}`)
        })
    })
  }
  static totalActicle() {
    let url = this.baseUrl
    return axios
      .get(`${url}/total`)
      .then((res) => {
        return res.data.data.total
      })
  }
  static write(title,text){
    let url = this.baseUrl
    if(!(title&&text)){
      message.error(`title:${title},text:${text}`)
      return 0
    }
    return axios
    .post(`${url}/writeacticle`)
    .then((res)=>{
      if(res.data.success){
        message.success('~成功发布文章~')
        return res.data.success
      }
    })
  }
}
export default Http
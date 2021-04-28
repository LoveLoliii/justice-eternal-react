import axios from "axios";
import { message } from 'antd';

axios.defaults.baseURL = 'http://127.0.0.1:8080'  //正式
// axios.defaults.baseURL = 'http://test' //测试

//post请求头
axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";

axios.defaults.transformRequest = [function (data) {
    let ret;
    if(data&&data.file){
      ret = new FormData();
　　    ret.append('file', data.file); 
      delete data.file
      for(let key in data){
　　      ret.append(key,data[key]); 
      }
    }else{
      ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
    }
    return ret
}]
//设置超时
axios.defaults.timeout = 10000;


axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    message.error(`异常请求：${JSON.stringify(error.message)}`);
  }
);


export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
          method: 'post',
          url,
          data
        })
        .then(e => {
        	let res = e.data
  			if(res.error==2){
  				message.error(res.info);
  			}else{
  				resolve(res)
  			}
        })
        .catch(err => {
          reject(err)
        });
    })
  },
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
          method: 'get',
          url,
          params: data,
        })
        .then(e => {
        	let res = e.data
        	if(res.error==2){
                message.error(res.info);
            }else{
                resolve(res)
            }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
};

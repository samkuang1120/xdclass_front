import axios from 'axios'


const service = axios.create({
    //url = base url + reqeust url
    baseURL : "http://192.168.11.165:8089",
    
    //配置请求超时时间
    timeout: 5000
})



export default service

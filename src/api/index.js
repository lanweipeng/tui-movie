import axios from 'axios'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const GetAxios=((url,obj)=>{
  console.log(obj)
  const params=[]
  Object.keys(obj).forEach(item=>{
    params.push(`${item}=${obj[item]}`)
  })
  console.log(params)
return axios.get(url+'?'+params.join('&'))
})
export {
  axios
}
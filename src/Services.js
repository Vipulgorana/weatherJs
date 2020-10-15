import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL
const key = process.env.REACT_APP_KEY
const getWeather = (city) =>{
  const request = axios.get(`${baseUrl}${city}&appid=${key}&units=metric`)
  return request.then(res=>res.data)
}

export default{
  getWeather
}
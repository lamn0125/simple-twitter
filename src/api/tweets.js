import axios from 'axios'

const baseURL = 'https://thawing-scrubland-31166.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL: baseURL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

export const getTweets = async () => {
  try {
    const res = await axiosInstance.get(`${baseURL}/tweets`)
    // 回傳結果
    console.log(res.data) 
    return res.data 
    
  } catch (error) {
    console.error('[Get Tweets failed]: ', error)
  }
}

export const createTweet = async (payload) => {
  // 透過解構來提取屬性值
  const { id, userId, description, createdAt } = payload;
  try {
    const res = await axiosInstance.post(`${baseURL}/tweets`, {
      id, userId, description, createdAt
    });
    console.log('data', res.data)
    return res.data;    
  } catch (error) {
    console.error('[Create Tweet failed]: ', error);
  }
}
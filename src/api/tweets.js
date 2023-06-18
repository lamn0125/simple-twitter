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
    // 依時間日期排序
    res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    console.log('get Tweet length:', res.data.length)
    console.log('get Tweet data:', res.data)
    return res.data 
  } catch (error) {
    console.error('[Get Tweets failed]:', error)
  }
}

export const createTweet = async (payload) => {
  // 透過解構來提取屬性值
  const { id, userId, description, createdAt } = payload;
  try {
    const res = await axiosInstance.post(`${baseURL}/tweets`, {
      id, userId, description, createdAt
    })
    console.log('create Tweet data:', res.data)
    return res.data
  } catch (error) {
    console.error('[Create Tweet failed]:', error)
  }
}

export const getComments = async (id) => {
  try {
    const res = await axiosInstance.get(`${baseURL}/tweets/${id}/replies`)
    return res.data 
  } catch (error) {
    console.error('[Get Comments failed]: ', error)
  }
}


// 刪除推文功能
// export const deleteTweet = async (delID) => {
//   try {
//     const res = await axiosInstance.delete(`${baseURL}/tweets/${delID}`)
//     console.log('delete Tweet data:', res.data)
//     return res.data
//   } catch (error) {
//     console.error('[Create Tweet failed]:', error)
//   }
// }

import axios from 'axios';

const authURL = 'https://thawing-scrubland-31166.herokuapp.com/api'

// User Login API
export const login = async ({ account, password }) => {
  try {
    const {data} = await axios.post(`${authURL}/users/signin`, {
      account,
      password,
    });
    const id = data.user.id
    const role = data.user.role
    const token = data.token

    if (token) {
      return { id, token, role }
    }
     return data;
  } catch (error) {
    const errorMsg = error.response.data.message
    console.error('[Login Failed]:', error.response.data.message)
    return { errorMsg }
  }
};

// Register API

// Admin Login API
export const adminLogin = async ({ account, password }) => {
  try {
    const {data} = await axios.post(`${authURL}/admin/signin`, {
      account,
      password,
    });

    console.log(data)

    const id = data.data.admin.id
    const role = data.data.admin.role
    const token = data.data.token

    console.log(id, role, token)
    if (token) {
      return { id, token, role }
    }
     return data;

  } catch (error) {
    const errorMsg = error.response
    console.error('[Login Failed]:', errorMsg)
    return { errorMsg }
  }
};
import axios from 'axios'

const instance = axios.create({

  baseURL: 'YOUR CLOUD API ENDPOINT'
  // baseURL: 'http://localhost:5001/shop-clone-3a028/us-central1/api'
})

export default instance
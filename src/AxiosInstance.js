import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: 'https://6889c3864c55d5c739536f47.mockapi.io/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default AxiosInstance
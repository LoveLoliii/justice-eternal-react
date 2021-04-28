import axios from '../utils/axios'
export const GetThreadList = async (data={}) => {
    return axios.get('/getThreadList',data)
} 
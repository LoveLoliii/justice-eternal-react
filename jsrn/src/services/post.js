import axios from '../utils/axios'
export const GetPostList = async (data={}) => {
    return axios.get('/getPostList',data)
} 
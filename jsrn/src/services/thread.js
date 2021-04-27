import axios from '../utils/axios'
export const GetThreadList = async () => {
    return axios.post('/getThreadList',{logname:'test',passwd:''})
} 
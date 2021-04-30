import axios from '../utils/axios'
export const AddVisitCount = async (data={}) => {
    return axios.get('/addVisitCount',data)
} 
import axios from '../utils/axios'
export const Login = async () => {
    return axios.post('/Admin/Login/userLogin',{logname:'test',passwd:''})
} 
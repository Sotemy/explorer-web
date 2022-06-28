import axios from "axios"

const API_URL = '/api/auth/register'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(!response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response
}

const authService = {
    register
}

export default authService;
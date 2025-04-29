import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/kinalCast/v2",
    timeout: 3000,
    httpsAgent: false
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user")

        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const register = async (data) => {
    try{
        return await apiClient.post('/auth/register', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const login = async (data) => {
    try{
        return await apiClient.post('/auth/login', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getChannels = async () => {
    try{
        return await apiClient.get('/channels')
    }catch(e){
        return{
            error: true,
            e: e
        }
    }
}

export const getChannelDetails = async (channelId) => {
    try{
        return await apiClient.get(`/channels/${channelId}`)
    }catch(e){
        return{
            error: true,
            e: e
        }
    }
}

export const followChannel = async (channelId) => {
    try{
        return await apiClient.post('/channels/follow',{channelId})
    }catch(e){
        return{
            error: true,
            e: e
        }
    }
}
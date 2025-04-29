import{ useState, useEffect, useCallback } from 'react'
import toast from 'react-hot-toast'
import { getChannels as getChannelsRequest } from '../../services'

export const useChannels = () => {
    const [channels, setChannels] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    const getChannels = useCallback(async () =>{
        setIsFetching(true)
        const channelsData = await getChannelsRequest()

        if(channelsData.error){
            toast.error(channelsData.e?.response?.data || 'Error al obtener los canales')
            return
        }

        setChannels(channelsData.data.channels)
        setIsFetching(false)
    },[])

    useEffect(() => {
        getChannels()
    },[getChannels])

    return{
        getChannels,
        allChannels: channels,
        isFetching
    }
}

import axios, { AxiosError } from "axios"
import { useQuery } from "react-query"
import { Novel } from "../../models/Novel"

export const useNovelsQuery = () => {
    
    return useQuery<Novel[], AxiosError>('novels', async () => {
        const res = await axios.get('/novels')
        return res.data
    })
}


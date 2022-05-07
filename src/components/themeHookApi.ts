import axios, { AxiosError } from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { Theme } from "../models/Theme"

export const useThemesQuery = () => {
    
    return useQuery<Theme[], AxiosError>('themes', async () => {
        const res = await axios.get('/themes')
        return res.data
    })
}


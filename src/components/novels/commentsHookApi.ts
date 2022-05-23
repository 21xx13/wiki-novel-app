import axios, { AxiosError } from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { NovelComment } from "../../models/Comment"

export const useCommentsQuery = () => {
    return useQuery<NovelComment[], AxiosError>('comments', async () => {
        const res = await axios.get('/comments')
        return res.data
    })
}

export const useSaveCommentMutation = () => {
    const queryClient = useQueryClient()

    return useMutation<NovelComment, AxiosError, NovelComment>(async (comment) => {
        const res = await axios.request({
            method: 'post',
            url:`/comments/`,
            data: comment
        });
        return res.data;
    }, {
        onSuccess(data, vars) {
            queryClient.setQueryData<NovelComment[]>('comments', (comments) => {
                    comments.push(data)
                return [...comments]
            })
        }
    })
}
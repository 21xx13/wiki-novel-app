import axios, { AxiosError } from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { User } from "../../models/User";
import { getCookie } from "./csrfToken";

var csrftoken = getCookie('csrftoken');

export const useLoginUserMutation = (isLogin: boolean) => {

    return useMutation<any, AxiosError, any>(async (user) => {
        const res = await axios.request({
            method: 'post',
            url: isLogin ? "/signin/" : "/register/",
            headers: {
                "X-CSRFToken": csrftoken,
                "content-type": "application/json",
              },
            data: user
        });
        return res.data;
    })
}


// export const useDeleteTodoMutation = () => {
//     const queryClient = useQueryClient()

//     return useMutation<Todo, AxiosError, number>(async (id) => {
//         const res = await axios.delete(`/todos/${id}`)
//         return res.data
//     }, {
//         onSuccess(data, id) {
//             queryClient.setQueryData<Todo[]>('todos', todos => {
//                 const index = todos.findIndex(t => t.id == id)
//                 todos.splice(index, 1)
//                 return [...todos]
//             })
//         }
//     })
// }
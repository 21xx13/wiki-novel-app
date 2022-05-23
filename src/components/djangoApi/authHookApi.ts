import axios, { AxiosError } from "axios"
import { useMutation } from "react-query"
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
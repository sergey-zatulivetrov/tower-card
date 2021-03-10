import axios from 'axios'

export const GET = 'GET'
export const POST = 'POST'
export const PUT = 'PUT'
export const DELETE = 'DELETE'

export default function request({headers = {}, method = GET, url = '', data = {}, callback = f => f}) {
    let params = {}

    if (GET === method) {
        params = data
        data = {}
    }

    return axios({
        method,
        url,
        params,
        data,
        headers
    })
        .then(res => res.data)
        .then(res => {
            callback(res)

            return res
        })
}
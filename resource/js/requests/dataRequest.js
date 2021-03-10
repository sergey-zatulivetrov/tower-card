import request from 'App/helper/request'

export default function dataRequest(callback) {
    return request({
        url: '/api/data',
        callback
    })
}
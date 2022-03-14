const apiHost = 'http://localhost:8000'
const request = (api: string) => {
    return fetch(`${apiHost}${api}`).then(res => res.json())
}
export const getLeveMessageList = () => {
    return request('/getLeveMessageList')
}
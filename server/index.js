import http from 'http'

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const response = {
        a: 1
    }
    res.end(JSON.stringify(response))
})
server.listen(8000)

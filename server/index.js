import url from 'url'
import http from 'http'
import mongodb from 'mongodb'
const {MongoClient  } = mongodb;
var url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url)
const route = (pathname)=>{

}
const server = http.createServer((request, res) => {
    var pathname = url.parse(request.url).pathname;
    res.setHeader("Access-Control-Allow-Origin", "*")

    route(pathname);
    const response = [
        {
            author: 'wyp',
            content: '我爱中国'
        }
    ]
    res.end(JSON.stringify(response))
})
server.listen(8000)

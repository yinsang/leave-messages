import url from 'url'
import http from 'http'
import mongodb from 'mongodb'
import path from 'path';
const {MongoClient  } = mongodb;
const client = new MongoClient("mongodb://127.0.0.1:27017")
const route = (pathname)=>{

}
const server = http.createServer((req, res) => {
    var {pathname} = url.parse(req.url);
    if(pathname.startsWith('/api')){
        res.setHeader("Access-Control-Allow-Origin", "*")
        let data = ''
        req.on('data', chunk => {
            console.log(typeof chunk,'typeof chunk');
            data+=chunk.toString();
          })
        res.end(async ()=>{
            const res = await client.connect();
            const db = client.db('leaveMessages');
            const collection = db.collection('data');
            collection.insertOne(JSON.parse(data))
            return '插入成功'
        })

    }else{
        // throw Error('仅提供api服务')
    }
})
server.listen(8000)

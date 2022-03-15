import http from 'http'
import  redis from 'redis';
var client = redis.createClient('6379', '127.0.0.1')
client.set('foo', 'bar', function () {
    　　 // 此时SET命令执行完并返回结果，
    　　 // 因为这里并不关心SET命令的结果，所以我们省略了回调函数的形参。
    　　 client.get('foo', function (error, fooValue) {
    　　　　　// error参数存储了命令执行时返回的错误信息，如果没有错误则返回null。
    　　　　　// 回调函数的第二个参数存储的是命令执行的结果
    　　　　　console.log(fooValue); // 'bar'
    　　 });
    });
const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    const response = [
        {
            author: 'wyp',
            content:'我爱中国'
        }
    ]
    res.end(JSON.stringify(response))
})
server.listen(8000)

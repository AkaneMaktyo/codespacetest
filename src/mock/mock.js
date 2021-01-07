import Mock from 'mockjs'

//模拟后端发送请求
Mock.mock('http://localhost:9000/register',{
    "status":1,
    "data":{
        "message":'用户已经存在'
    }
})
const handleUserRouter = (req,res)=>{
    const method = req.method // 获取 get post
    const url = req.url
    const path = url.split('?')[0]

    // 登录
    if(method === 'POST' && path === '/api/user/login'){
        return {
            msg: '这是登录接口'
        }
    }
}

module.exports = handleUserRouter
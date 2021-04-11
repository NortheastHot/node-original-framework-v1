const serverHandle = (req,res)=>{
    // 设置返回格式JSON
    res.setHeader('Content-type', 'application/json')
    const resData = {
        name:'kizi',
        site: 223,
        env: process.env.NODE_ENV // 获取环境
    }
    res.end(JSON.stringify(resData))
}

module.exports = serverHandle 
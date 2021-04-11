const serverHandle = (req,res)=>{
    // 设置返回格式JSON
    res.setHeader('Content-type', 'application/json')
    const resData = {
        name:'kizi',
        site: 223
    }
    res.end(JSON.stringify(resData))
}

module.exports = serverHandle
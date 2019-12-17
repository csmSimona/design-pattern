// 单例模式-使用惰性单例实现弹框
var createLoginLayer = (function(){
    var div
    return function(){
        if(!div){
            div = document.createElement("div")
            div.innerHTML = '我是登录框'
            div.style.display = 'none'
            document.body.appendChild(div)
        }
        return div
    }
})()
            
document.getElementById("loginBtn").onclick = function() {
    var loginLayer = createLoginLayer()
    loginLayer.style.display = 'block'
}
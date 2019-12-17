// 单例模式-用通用的惰性单例改造前面的弹框

// 将创建实例对象的职责和管理单例的职责分别放置在两个方法里
var getSingle = function(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this, arguments));
    }
};
         
var createLoginLayer = function(){
    var div = document.createElement("div");
    div.innerHTML = '我是登录框'
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

var createSingleLoginLayer = getSingle(createLoginLayer);
            
document.getElementById("loginBtn").onclick = function() {
    var loginLayer = createSingleLoginLayer()
    loginLayer.style.display = 'block'
}
// 用代理实现单例模式

// 解决 透明的单例模式 (index3.js) 中的的问题

// 同个例子:使用CreateDiv单例类，在页面中创建唯一的div节点

var CreateDiv = function(html) {
    this.html = html
    this.init()
}
CreateDiv.prototype.init = function() {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}

// 引入代理类，将负责管理单例类的逻辑移到这里
var ProxySingletonCreateDiv = (function(){
    var instance
    return function(html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()

var a = new ProxySingletonCreateDiv('div1')
var b = new ProxySingletonCreateDiv('div2')
console.log(a === b)



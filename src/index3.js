// 透明的单例模式

// 例:使用CreateDiv单例类，在页面中创建唯一的div节点
var CreateDiv = (function(){
    var instance
    
    // CreateDiv的构造函数实际上负责了两件事情
    // 第一是创建对象和执行初始化init方法，第二是保证只有一个对象
    // 违反了单一职责原则，不太好
    var CreateDiv = function(html) {
        if (instance) {
            return instance
        }
        this.html = html
        this.init()
        return instance = this
    }

    CreateDiv.prototype.init = function() {
        var div = document.createElement('div')
        div.innerHTML = this.html
        document.body.appendChild(div)
    }

    return CreateDiv
})()

var a = new CreateDiv('div1')
var b = new CreateDiv('div2')
console.log(a === b)


// 实现单例模式
class SingleObject {
    login() {
        console.log('login')
    }
}
SingleObject.getInstance = (function(){
    let instance
    return function() {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// 测试 
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()
console.log(obj1 === obj2) // true

//JavaScript中的私有 需要自主实现，当这里使用的不是静态函数getInstance，而是直接 new SingleObject()时 则不是单例
let obj3 = new SingleObject()
obj3.login()
console.log(obj1 === obj3) // false
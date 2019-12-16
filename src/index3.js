// 单例模式-模拟登录框
class LoginForm {
    constructor () {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            console.log('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框显示')
    }
    hide() {
        if (this.state === 'hide') {
            console.log('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框隐藏')
    }
}
LoginForm.getIntance = (function() {
    let instance
    return function() {
        if (!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

// 测试
let login1 = LoginForm.getIntance()
login1.show() // 登录框显示
let login2 = LoginForm.getIntance()
login2.show() // 已经显示
console.log(login1 === login2) // true
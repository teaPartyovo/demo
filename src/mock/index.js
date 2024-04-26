import Mock from 'mockjs'
import * as login from './modules/login'
import * as admin from './modules/admin'
import * as common from './modules/common'
import * as student from './modules/student'
import * as technician from './modules/technician'
import * as teacher from './modules/teacher'

// 1. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 2. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
fnCreate(login, true)
fnCreate(admin, true)
fnCreate(common, true)
fnCreate(student, true)
fnCreate(technician, true)
fnCreate(teacher, true)


/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate (mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      ((res) => {
        if (res.isOpen !== false) {
          Mock.mock(new RegExp(res.url), res.type, (opts) => {
            opts['data'] = opts.body ? JSON.parse(opts.body) : null
            delete opts.body
            console.log('\n')
            console.log('%cmock拦截, 请求: ', 'color:blue', opts)
            console.log('%cmock拦截, 响应: ', 'color:blue', res.data)
            return res.data
          })
        }
      })(mod[key]() || {})
    }
  }
}
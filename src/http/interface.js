import axios from './axios'

/* 
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
// 登陆接口
export const login = (username, password) => {
    return axios({
        url: '/login_mock',
        method: 'get',
        params: { username, password }
    })
}

// //如果是body的话
// export const login = (username, password) => {
//     return axios({
//         url: '/login_mock',
//         method: 'post', //方式改为post
//         data: { username, password } //这里改为data
//     })
// }

//获取当前学期数据
export const common_semester = () => {
    return axios({
        url: '/common/semester_mock',
        method: 'get'
    })
}
//获取所有实验室数据
export const common_laboratory = data => {
    return axios({
        url: '/common/laboratory',
        method: 'get',
        data
    })
}
//根据周数获取课程信息
export const common_class = week => {
    return axios({
        url: '/common/class',
        method: 'get',
        params: {week}
    })
}

//学生接口
//借用实验室
export const student_loan_post = data => {
    return axios({
        url: '/student/loan',
        method: 'post',
        data
    })
}

//列出自己填报的实验室借用申请
export const student_loan_get = () => {
    return axios({
        url: '/student/loan',
        method: 'get'
    })
}

//修改实验室借用申请
export const student_loan_put = data => {
    return axios({
        url: '/student/loan',
        method: 'put',
        data
    })
}

//完成实验室借用申请
export const student_loan_id = data => {
    return axios({
        url: '/student/loan/{id}',
        method: 'put',
        data
    })
}

//实验员
//列出自己管理的实验室的报修
export const technician_equip_get = data => {
    return axios({
        url: '/technician/equip',
        method: 'get',
        data
    })
}

//修改报修状态
export const technician_equip_put = data => {
    return axios({
        url: '/technician/equip',
        method: 'put',
        data
    })
}

//教师
//实验室申请
//新增申请
export const teacher_experiment_post = data => {
    return axios({
        url: '/teacher/experiment',
        method: 'post',
        data
    })
}

//查看自己的申请
export const teacher_experiment_get = data => {
    return axios({
        url: '/teacher/experiment',
        method: 'get',
        data
    })
}

//修改未排课的申请
export const teacher_experiment_put = data => {
    return axios({
        url: '/teacher/experiment',
        method: 'put',
        data
    })
}

//实验室设备保修
//新增报修
export const teacher_device_post = data => {
    return axios({
        url: '/teacher/device',
        method: 'post',
        data
    })
}

//列出所有报修
export const teacher_device_get = data => {
    return axios({
        url: '/teacher/device',
        method: 'get',
        data
    })
}

//管理员
//学期管理
//新增学期信息

// export const admin_semester_post = data => {
//     return axios({
//         url: '/admin/semester',
//         method: 'post',
//         data
//     })
// }
// export const admin_semester_post = async (data) => {
//     try {
//       // 发送 POST 请求到指定的后端 API 端点
//       const response = await axios.post('/admin/semester', data);
  
//       // 返回请求成功时的响应数据
//       return response.data;
//     } catch (error) {
//       // 捕获请求失败时的错误并抛出
//       throw new Error(`Failed to add semester: ${error.message}`);
//     }
//   };
// body
export const admin_semester_post = (requestData) => {
    return axios({
        url: '/admin/semester',
        method: 'post', 
        data: {requestData} ,
    })
}

//查询所有学期信息
export const admin_semester_get = data => {
    return axios({
        url: '/admin/semester',
        method: 'get',
        data
    })
}

//设置当前学期
export const admin_semester_id = (year,season) => {
    return axios({
        url: '/admin/semester',
        method: 'get',
        params: {year,season}
    })
}

//平台用户管理
//显示所有用户信息
export const admin_user_get = data => {
    return axios({
        url: '/admin/user',
        method: 'get',
        data
    })
}

//删除用户信息
export const admin_user_delete = data => {
    return axios({
        url: '/admin/user',
        method: 'delete',
        data
    })
}

//重置密码
export const admin_reset = data => {
    return axios({
        url: '/admin/reset',
        method: 'put',
        data
    })
}

//新增用户信息
export const admin_user_post = data => {
    return axios({
        url: '/admin/user',
        method: 'post',
        data
    })
}

//更新用户信息
export const admin_user_put = data => {
    return axios({
        url: '/admin/user',
        method: 'put',
        data
    })
}

//excel文件批量导入
export const admin_user_upload = data => {
    return axios({
        url: '/admin/user/upload',
        method: 'post',
        data
    })
}

//实验课排课
//根据申请获取符合条件的实验室
export const admin_classes_id = (id) => {
    return axios({
        url: `/admin/classes/${id}`, // 使用反引号和 ${} 来插入变量
        method: 'get'
        // 不需要 params，因为 id 已经在 url 中了
    })
}

//获取所有教师的申请
export const admin_classes_get = data => {
    return axios({
        url: '/admin/classes',
        method: 'get',
        data
    })
}

//完成排课
export const admin_classes_put = data => {
    return axios({
        url: '/admin/classes',
        method: 'put',
        data
    })
}

//实验室借用管理
//获取所有借用实验室请求
export const admin_loan_get = data => {
    return axios({
        url: '/admin/loan',
        method: 'get',
        data
    })
}

//审批借用请求
export const admin_loan_put = data => {
    return axios({
        url: '/admin/loan',
        method: 'put',
        data
    })
}

// 默认全部导出
export default {
    login,
    common_semester,
    common_laboratory,
    common_class,
    student_loan_post,
    student_loan_get,
    student_loan_id,
    technician_equip_get,
    technician_equip_put,
    teacher_experiment_post,
    teacher_experiment_get,
    teacher_experiment_put,
    teacher_device_post,
    teacher_device_get,
    admin_semester_post,
    admin_semester_get,
    admin_semester_id,
    admin_user_get,
    admin_user_delete,
    admin_reset,
    admin_user_post,
    admin_user_put,
    admin_user_upload,
    admin_classes_id,
    admin_classes_get,
    admin_classes_put,
    admin_loan_get,
    admin_loan_put,
}
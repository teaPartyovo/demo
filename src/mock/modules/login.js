// 登录接口
export function login () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/login_mock',
      type: 'get',
      data: {
        "code": 0,
        "message": "tempor",
        "data": {
          "id": 96,
          "role": 4,
          "token": "tokenmock"
        }
      }
    }
  }
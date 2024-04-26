// 获取当前学期数据
export function login () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/common/semester',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": {
          "id": 3,
          "year": 2023,
          "season": 1,
          "weeks": 16
        }
      }
    }
  }
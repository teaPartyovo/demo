// 查询所有学期信息
export function admin_semester_get () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/semester',
      type: 'get',
      data: {
        "code": 0,
        "data": [
            {
                "id": 0,
                "year": 2023,
                "season": 2,
                "weeks": 16
            },
            {
                "id": 1,
                "year": 2023,
                "season": 1,
                "weeks": 16
            },
            {
                "id": 2,
                "year": 2022,
                "season": 1,
                "weeks": 16
            },
            {
                "id": 4,
                "year": 2022,
                "season": 2,
                "weeks": 16
            },
        ],
        "message": "string"
    }
    }
  }
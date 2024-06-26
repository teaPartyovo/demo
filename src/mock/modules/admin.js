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

  export function admin_classes_id () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/fuck/*',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
            {
                "id": 1,
                "labNumber": 532,
                "labName": "程序设计实验室",
                "labCategory": "软件",
                "equipmentCount": 70,
                "userId": 3
            },
            {
                "id": 4,
                "labNumber": 535,
                "labName": "数据分析实验室",
                "labCategory": "软件",
                "equipmentCount": 65,
                "userId": 4
            },
        ]
    }
    }
  }

  export function admin_classes_get () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/classes',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
          {
            "id": 1,
            "semesterId": 3,
            "teacherId": 1,
            "courseName": "C语言程序设计",
            "labType": "软件",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 1,
            "semester": {
              "id": 3,
              "year": 2023,
              "season": 2,
              "weeks": 19
            },
            "teacherName": "管理员"
          },
          {
            "id": 2,
            "semesterId": 3,
            "teacherId": 1,
            "courseName": "修改测试1",
            "labType": "2242",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 0,
            "semester": {
              "id": 3,
              "year": 2023,
              "season": 1,
              "weeks": 19
            },
            "teacherName": "管理员"
          },
          {
            "id": 3,
            "semesterId": 3,
            "teacherId": 1,
            "courseName": "C语言程序设计",
            "labType": "机房",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 0,
            "semester": {
              "id": 3,
              "year": 2023,
              "season": 1,
              "weeks": 19
            },
            "teacherName": "管理员"
          }
        ]
      }
    }
  }
 

//设置当前学期
  export function admin_classes_put () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/loan',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
          {
            "id": 2,
            "semesterId": 3,
            "studentId": 12,
            "weekNumber": 3,
            "sessionNumber": 2,
            "labNumber": 535,
            "applicationReason": "“用来训练124”",
            "applicationDate": [
                2024,
                4,
                10
            ],
            "status": 1
        },
        {
          "id": 2,
          "semesterId": 3,
          "studentId": 12,
          "weekNumber": 3,
          "sessionNumber": 2,
          "labNumber": 535,
          "applicationReason": "“用来训练124”",
          "applicationDate": [
              2024,
              4,
              10
          ],
          "status": 2
      },
      {
        "id": 2,
        "semesterId": 3,
        "studentId": 12,
        "weekNumber": 3,
        "sessionNumber": 2,
        "labNumber": 535,
        "applicationReason": "“用来训练124”",
        "applicationDate": [
            2024,
            4,
            10
        ],
        "status": 3
    },
            {
                "id": 2,
                "semesterId": 3,
                "studentId": 12,
                "weekNumber": 3,
                "sessionNumber": 2,
                "labNumber": 535,
                "applicationReason": "“用来训练124”",
                "applicationDate": [
                    2024,
                    4,
                    10
                ],
                "status": 4
            }
        ]
    }
    }
  }
//列出所有实验室
  export function admin_loan_put () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/loan',
      type: 'put',
      data: {
        "code": 0,
        "message": "该请求已经审批过了",
        "data": null
      }
    }
  }

  export function admin_user_get () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/admin/user',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
          {
            "id": 2,
            "username": "1001",
            "name": "实验员1",
            "title": "教授",
            "major": null,
            "classes": null
          },
          {
            "id": 3,
            "username": "1002",
            "name": "实验员2",
            "title": "副教授",
            "major": null,
            "classes": null
          },
          {
            "id": 4,
            "username": "1003",
            "name": "实验员3",
            "title": "院长",
            "major": null,
            "classes": null
          }
        ]
      }
    }
  }
  
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

  //根据周数获取课程信息
  export function common_class () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/common_class',
      type: 'get',
      data: {
        "message": null,
        "data": [
          {
            "courseName": "C语言程序设计",
            "teacherName": "tea1",
            "classes": "3班",
            "labNumber": 602,
            "startWeek": 1,
            "endWeek": 10,
            "sessionNumber": 1
          },
          {
            "courseName": "C语言程序设计",
            "teacherName": "tea1",
            "classes": "4班",
            "labNumber": 601,
            "startWeek": 1,
            "endWeek": 10,
            "sessionNumber": 5
          },
          {
            "courseName": "C语言程序设计",
            "teacherName": "tea2",
            "classes": "4班",
            "labNumber": 601,
            "startWeek": 1,
            "endWeek": 10,
            "sessionNumber": 1
          },
          {
            "courseName": "C语言程序设计",
            "teacherName": "tea1",
            "classes": "4班",
            "labNumber": 601,
            "startWeek": 1,
            "endWeek": 10,
            "sessionNumber": 6
          },
          {
            "courseName": "C语言程序设计",
            "teacherName": "tea2",
            "classes": "4班",
            "labNumber": 601,
            "startWeek": 1,
            "endWeek": 10,
            "sessionNumber": 7
          },
        ]
      }
    }
  }
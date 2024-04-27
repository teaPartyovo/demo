
export function teacher_experiment_get () {
    return {
      url: 'http://localhost:8080/teacher/experiment',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
          {
            "id": 1,
            "courseName": "C语言程序设计",
            "labType": "机房",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 0
          },
          {
            "id": 2,
            "courseName": "C语言程序设计",
            "labType": "机房",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 0
          },
          {
            "id": 3,
            "courseName": "C语言程序设计",
            "labType": "机房",
            "studentClass": "4班",
            "studentCount": 50,
            "startWeek": 4,
            "endWeek": 10,
            "sessionNumber": 3,
            "status": 1
          }
        ]
      }
    }
  }

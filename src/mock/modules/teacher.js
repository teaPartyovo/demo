
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



export function teacher_device_get () {
  return {
    url: 'http://localhost:8080/teacher/device',
    type: 'get',
    data: {
      "code": 1,
      "message": null,
      "data": [
        {
          "id": 1,
          "teacherId": 1,
          "labNumber": 801,
          "faultDescription": "xxx坏了",
          "repairDate": [
            2024,
            4,
            10
          ],
          "status": 1 //1 未维修，2 维修中，3 已维修
        }
      ]
    }
  }
}


export function teacher_device_post () {
  return {
    url: 'http://localhost:8080/teacher/device',
    type: 'post',
    data: {
      "code": 1,
      "message": null,
      "data": null
    }
  }
}
// 实验室借用申请
export function student_loan_get () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/student/loan',
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
            "labNumber": 534,
            "applicationReason": "“用来训练”",
            "applicationDate": [
              2024,
              4,
              10
            ],
            "status": 2
          },
          {
            "id": 22,
            "semesterId": 3,
            "studentId": 123,
            "weekNumber": 3,
            "sessionNumber": 2,
            "labNumber": 534,
            "applicationReason": "“用来4训练”",
            "applicationDate": [
              2024,
              4,
              10
            ],
            "status": 1
          },
        ]
      }
    }
  }
//借用实验室
  export function student_loan_post () {
    return {
      url: 'http://localhost:8080/student/loan',
      type: 'post',
      data: {
        "code": 0,
        "message": null,
        "data": null
    }
    }
  }

//修改实验室借用申请
  export function student_loan_put () {
    return {
      url: 'http://localhost:8080/student/loan',
      type: 'put',
      data: {
        "code": 0,
        "message": null,
        "data": null
    }
    }
  }

//完成实验室借用申请
  export function student_loan_id () {
    return {
      url: 'http://localhost:8080/student/loan/*',
      type: 'put',
      data: {
        "code": 1,
        "message": "该申请未通过",
        "data": null
    }
    }
  }
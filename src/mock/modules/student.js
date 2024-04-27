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
            "status": 1
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

  export function student_loan_post () {
    return {
      // isOpen: false,
      url: 'http://localhost:8080/student/loan',
      type: 'post',
      data: {
        "weekNumber": 0,
        "sessionNumber": 0,
        "labNumber": 0,
        "applicationReason": "string"
    }
    }
  }
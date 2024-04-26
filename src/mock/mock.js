import  Mock  from "mockjs";

Mock.mock('http://localhost:8080/login_mock',
    {
        "code": 28,
        "message": "tempor",
        "data": {
          "id": 96,
          "role": 1,
          "token": "dolor dolore nisi adipisicing eiusmod"
        }
    }
);


Mock.mock('http://localhost:8080/common/semester_mock',
  {
    "code": 1,
    "message": null,
    "data": {
      "id": 3,
      "year": 2023,
      "season": 1,
      "weeks": 19
    }
  }
);
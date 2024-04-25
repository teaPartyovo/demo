import  Mock  from "mockjs";

Mock.mock('http://localhost:8080/login1',
    {
        "code": 28,
        "message": "tempor",
        "data": {
          "id": 96,
          "role": 60,
          "token": "dolor dolore nisi adipisicing eiusmod"
        }
    }
)
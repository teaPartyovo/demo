//有问题的
export function technician_equip_get () {
    return {
      url: 'http://localhost:8080/technician/equip',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": [
          {
            "id": 1,
            "teacherId": 1,
            "labNumber": 534,
            "faultDescription": "xxx坏了",
            "repairDate": [
              2024,
              4,
              10
            ],
            "status": 2
          },
          
          {
            "id": 2,
            "teacherId": 1,
            "labNumber": 534,
            "faultDescription": "xxx坏了",
            "repairDate": [
              2024,
              4,
              10
            ],
            "status": 1
          }
        ]
      }
    }
  }

  export function technician_equip_put () {
    return {
      url: 'http://localhost:8080/technician/equip',
      type: 'put',
      data: {
        "code": 1,
        "message": null,
        "data": null
      }
    }
  }

  export function technician_equip_update () {
    return {
      url: 'http://localhost:8080/technician/equip/update',
      type: 'put',
      data: {
        "code": 1,
        "message": null,
        "data": null
      }
    }
  }
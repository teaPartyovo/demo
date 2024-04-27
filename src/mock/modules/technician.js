//有问题的
export function technician_equip_get () {
    return {
      url: 'http://localhost:8080/technician/equip',
      type: 'get',
      data: {
        "code": 1,
        "message": null,
        "data": null
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
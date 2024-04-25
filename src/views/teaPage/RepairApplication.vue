<template>
  <!-- <h3>实验室设备报修</h3> -->
  <div class="manage">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- <span>这是一段信息</span> -->

      <!-- 用户的表单信息 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="130px">
        <!-- :inline="true"移除 -->

        <!-- <el-form-item label="申请教师" prop="teacherId">
          <el-input placeholder="请输入申请教师" v-model="form.teacherId"></el-input>
        </el-form-item> -->
        <!-- 感觉可能不需要，因为就是自己 -->

        <el-form-item label="实验室编号" prop="labNumber">
          <el-input placeholder="请输入实验室编号" v-model="form.labNumber"></el-input>
        </el-form-item>

        <el-form-item label="故障描述" prop="faultDescription">
          <el-input placeholder="请输入故障描述" v-model="form.faultDescription"></el-input>
        </el-form-item>

        <!-- 用日期选择器选择代替输入 -->
        <el-form-item label="报修日期" prop="repairDate">
          <el-date-picker v-model="form.repairDate" type="date" placeholder="请选择报修日期" style="width: 100%;"
            :picker-options="pickerOptions"></el-date-picker>
        </el-form-item>


      </el-form>

      <!-- 表单的取消确认 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>

    </el-dialog>

    <!-- 头部功能区+表格区 -->
    <div class="manage-header">

      <!-- 头部功能区：按钮 -->
      <el-button @click="handleAdd" type="primary">
        <!-- @click="dialogVisible = true" -->
        + 新增
      </el-button>

      <!-- 头部功能区：form搜索区 不需要-->

    </div>

    <!-- 表格区 -->
    <div class="common-table">
      <el-table height="90%" :data="tableData" style="width: 100%" stripe="">

        <el-table-column prop="id" label="报修ID" align="center">
        </el-table-column>

        <el-table-column prop="teacherId" label="报修老师ID" align="center">
        </el-table-column>

        <el-table-column prop="labNumber" label="实验室编号" align="center">
        </el-table-column>

        <el-table-column prop="faultDescription" label="故障描述" align="center">
        </el-table-column>

        <el-table-column prop="repairDate" label="报修日期" align="center">
        </el-table-column>

        <el-table-column prop="status" label="维修状态" align="center">
        </el-table-column>
        <!-- 数字对应转换为文字 1 未维修，2 维修中，3 已维修 -->

        <!-- <el-table-column prop="addr" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
            <el-button type="danger" size="mini" @click="handleDelete(scope.row)">确认</el-button>
          </template>
        </el-table-column> -->

        <!-- 可能缺少一项维修情况说明，实验员上传的那个 -->
      </el-table>


      <!-- 底部页码区 -->
      <!-- <div class="pager">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage">
        </el-pagination>
      </div> -->
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      pickerOptions: {},
      form: {
        labNumber: '',
        faultDescription: '',
        repairDate: '',
      },
      rules: {
        labNumber: [
          { required: true, message: '请输入实验室编号' }
        ],
        faultDescription: [
          { required: true, message: '请输入故障描述' }
        ],
        repairDate: [
          { required: true, message: '请选择报修日期' }
        ],
      },

      // tableData: [],
      tableData: [
        {
          id: 1,
          teacherId: 101,
          labNumber: 'A101',
          faultDescription: '实验仪器损坏',
          repairDate: '2024-04-20',
          status: 2
        },
        {
          id: 2,
          teacherId: 102,
          labNumber: 'B202',
          faultDescription: '电路故障',
          repairDate: '2024-04-22',
          status: 1
        },
        {
          id: 3,
          teacherId: 103,
          labNumber: 'C303',
          faultDescription: '实验室门损坏',
          repairDate: '2024-04-25',
          status: 3
        },
        // 其他记录...
      ],

      modalType: 0, //0 新增的弹窗 1 修改的弹窗
      // 

      // total: 0, //当前总条数
      // pageData: {
      //   page: 1,
      //   pageSize: 10
      // },

    };
  },

  created() {

  },

  methods: {

    submit() {
      this.$refs.form.validate((valid) => {
        // console.log(valid,'valid');
        if (valid) {
          // 后续对表单的处理
          // console.log(this.form,'form');
          if (this.modalType === 0) {
            addUser(this.form).then(() => { //.then() 方法用于指定在异步操作成功时,即用户添加成功后执行的回调函数
              this.getList()
            })
          } else {
            editUser(this.form).then(() => {
              this.getList()
            })
          }
          // 这里addUser、editUser需要定义，可写在api中然后再在script的最前面 import { getUser, addUser, editUser, delUser } from '../../api'

          // 清空表单数据
          this.$refs.form.resetFields()
          // 关闭弹窗
          this.dialogVisible = false
        }
      })
    },
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    handleEdit(row) {
      this.modalType = 1
      this.dialogVisible = true
      // 要对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row))
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({ id: row.id }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    handleAdd() {
      this.modalType = 0
      this.dialogVisible = true
    },


    //获取列表的数据
    getList() {
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => { //合并对象属性
        console.log(data);
        this.tableData = data.list;
        this.total = data.count || 0
      })
    },
    // 选择页码的回调函数
    handlePage(val) {
      console.log(val);
      this.pageData.page = val;
      this.getList()
    },
    // 列表的查询
    onSubmit() {
      this.getList()
    },


  }

}
</script>

<style lang="less" scoped>
.manage {
  height: 90%;

  .manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .common-table {
    position: relative;
    height: calc(100% - 62px);

    // .pager {
    //   position: absolute;
    //   bottom: 0;
    //   right: 20px;
    // }
    // 底部页码区的样式
  }

}
</style>
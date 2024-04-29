<template>
  <!-- <h3>设备报修处理</h3> -->
  <div class="manage">
    <!-- 头部功能区+表格区 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :rules="rules" :model="form" label-width="140px">
        <el-form-item label="故障描述" prop="faultDescription">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入故障描述"
            v-model="form.content"
          ></el-input>
         
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
    </el-dialog>
    <!-- 头部功能区：按钮 form搜索区 好像不需要-->
    <div class="manage-header"></div>

    <!-- 表格区 -->
    <div class="common-table">
      <el-table height="90%" :data="tableData" style="width: 100%" stripe="">
        <el-table-column prop="id" label="报修ID" align="center">
        </el-table-column>

        <el-table-column prop="teacherId" label="报修教师id" align="center">
        </el-table-column>

        <!-- 报修教师姓名 -->

        <el-table-column prop="labNumber" label="实验室编号" align="center">
        </el-table-column>

        <!-- 实验室名称 -->

        <el-table-column
          prop="faultDescription"
          label="故障描述"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="repairDate" label="报修日期" align="center">
        </el-table-column>

        <el-table-column prop="status" label="维修状态" align="center">
        </el-table-column>
        <!-- 数字对应转换为文字（1 未维修，2 维修中，3 已维修） -->

        <el-table-column prop="addr" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)"
              v-if="scope.row.status == '未维修'"
              >开始维修</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.row)"
              v-if="scope.row.status == '维修中'"
              >维修完成</el-button
            >
            <!-- 开始维修按钮：点击后修改维修状态 -->
            <!-- 维修完成按钮：点击后，（弹出表单，输入维修情况说明，点击确认提交 （但好像没定义这一项）） ，然后修改维修状态 -->
          </template>
        </el-table-column>

        <!-- 维修情况说明 -->
      </el-table>

      <!-- 底部页码区 不必要 -->
      <!-- <div class="pager">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage">
        </el-pagination>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { getUser, addUser, editUser, delUser } from '../../api'
export default {
  data() {
    return {
      dialogVisible: false,

      //表单
      form: {
        content: "",
      },

      //表单规则
      rules: {
        content: [{ required: true, message: "请输入维修情况" }],
      },

      tableData: [
        // {
        //   id: 1,
        //   teacherId: 101,
        //   labNumber: 'A101',
        //   faultDescription: '实验仪器损坏',
        //   repairDate: '2024-04-20',
        //   status: 2,
        //   addr: '操作'
        // }
      ],
      modalType: 0,
      row_id: 0, //修改的行的id 用于修改

      //0 新增的弹窗 1 编辑的弹窗
      // 新增、修改两个按钮都要弹出表单，是通过这个判断点的是哪个按钮，
      // 而我们是只有点维修完成按钮才弹出，可能不需要这个判断

      // total: 0, //当前总条数
      // pageData: {
      //   page: 1,
      //   pageSize: 10
      // },
      // 页码跳转的功能 也不需要

      userForm: {
        name: "",
      },
    };
  },
  created() {
    this.getList123();
  },
  methods: {
    //参数需要对齐
    async getList123() {
      try {
        const response = await this.$api.technician_equip_get();
        if (response.data && Array.isArray(response.data)) {
          this.tableData = response.data.map((item) => {
            let statusText;
            switch (item.status) {
              case 1:
                statusText = "未维修";
                break;
              case 2:
                statusText = "维修中";
                break;
              case 3:
                statusText = "已维修";
                break;
              default:
                statusText = "未知状态";
            }
            return {
              id: item.id,
              teacherId: item.teacherId,
              labNumber: item.labNumber,
              faultDescription: item.faultDescription,
              repairDate: new Date(item.repairDate).toLocaleDateString(),
              status: statusText,
            };
          });
          console.log("成功从后端获取数据：", this.tableData);
        } else {
          console.error("从后端获取的数据格式不正确：", response.data);
        }
      } catch (error) {
        console.error("Error in admin_user_get:", error);
      }
    },
    //开始维修
    handleEdit(row) {
      this.modalType = 1;
      this.dialogVisible = false;
      this.row_id = row.id;
      // 要对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row));
      //提示信息
      this.$message.success("维修已开始");
      //调用api更改状态为维修中（2）
      this.$api.technician_equip_put(row.id, 2);
      this.getList123();
    },
    //完成维修
    handleDelete(row) {
      // 显示输入维修详情的对话框
      this.dialogVisible = true;
      this.row_id = row.id;
    },
    //完成维修后的操作
    submit(){
      this.$refs.form.validate((valid) => {
        // console.log(valid,'valid');
        if (valid) {
          // 后续对表单的处理
          // console.log(this.form,'form');
          // 修改维修状态
          this.$api.technician_equip_put(this.row_id, 3);
          this.$api.technician_equip_update(this.row_id, this.form.content)
          .then((result) => {
            if (result.code == 1) {
              this.$message.success("维修已完成");
              // this.getList123();
            } else {
              this.$message.error("完成维修失败");
            }
          })
          .catch((err) => {
            // alert(1);
            this.$message.error("未知错误");
          });
          this.dialogVisible = false;
          this.getList123();
        }
      })
    },
    // // 弹出的表单
    // submit() {
    //   this.$refs.form.validate((valid) => {
    //     // console.log(valid,'valid');
    //     if (valid) {
    //       // 后续对表单的处理
    //       // console.log(this.form,'form');
    //       if (this.modalType === 0) {
    //         addUser(this.form).then(() => { //.then() 方法用于指定在异步操作成功时,即用户添加成功后执行的回调函数
    //           this.getList()
    //         })
    //       } else {
    //         editUser(this.form).then(() => {
    //           this.getList()
    //         })
    //       }

    //       // 清空表单数据
    //       this.$refs.form.resetFields()
    //       // 关闭弹窗
    //       this.dialogVisible = false
    //     }
    //   })
    // },
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    // handleEdit(row) {
    //   this.modalType = 1
    //   this.dialogVisible = true
    //   // 要对当前行数据进行深拷贝
    //   this.form = JSON.parse(JSON.stringify(row))
    // },
    // handleDelete(row) {
    //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     delUser({ id: row.id }).then(() => {
    //       this.$message({
    //         type: 'success',
    //         message: '删除成功!'
    //       });
    //       this.getList()
    //     })

    //   }).catch(() => {
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     });
    //   });
    // },
    // handleAdd() {
    //   this.modalType = 0
    //   this.dialogVisible = true
    // },
    // //获取列表的数据
    // getList() {
    //   getUser({ params: { ...this.userForm, ...this.pageData } }).then(({ data }) => { //合并对象属性
    //     console.log(data);
    //     this.tableData = data.list;
    //     this.total = data.count || 0
    //   })
    // },
    // // 选择页码的回调函数
    // handlePage(val) {
    //   console.log(val);
    //   this.pageData.page = val;
    //   this.getList()
    // },
    // 列表的查询
    // onSubmit() {
    //   this.getList()
    // }
  },
  mounted() {
    // getUser().then(({data})=>{
    //   console.log(data);
    //   this.tableData= data.list;
    // })
    this.getList();
  },
};
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

    .pager {
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>
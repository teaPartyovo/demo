<template>
  <!-- <h3>实验室借用申请</h3> -->
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span> -->

      <!-- 用户的表单信息 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="130px">
        <!-- :inline="true"移除 -->

        <!-- <el-form-item label="职称" prop="title">
          <el-select v-model="form.title" placeholder="请选择职称">
            <el-option label="讲师" :value="0"></el-option>
            <el-option label="助教" :value="1"></el-option>
            <el-option label="副教授" :value="2"></el-option>
            <el-option label="教授" :value="3"></el-option>
          </el-select>
        </el-form-item> -->

        <!-- <el-form-item label="申请学生" prop="studentId">
          <el-input placeholder="请输入申请学生" v-model="form.studentId"></el-input>
        </el-form-item> -->
        <!-- 感觉可能不需要，因为就是自己 -->

        <el-form-item label="申请周次" prop="weekNumber">
          <el-input
            placeholder="请输入申请周次"
            v-model="form.weekNumber"
          ></el-input>
        </el-form-item>

        <el-form-item label="申请节次" prop="sessionNumber">
          <el-input
            placeholder="请输入申请节次"
            v-model="form.sessionNumber"
          ></el-input>
        </el-form-item>

        <el-form-item label="申请实验室编号" prop="labNumber">
          <el-input
            placeholder="请输入申请实验室编号"
            v-model="form.labNumber"
          ></el-input>
        </el-form-item>

        <el-form-item label="申请原因" prop="applicationReason">
          <el-input
            placeholder="请输入申请原因"
            v-model="form.applicationReason"
          ></el-input>
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
        <el-table-column prop="id" label="申请ID" align="center">
        </el-table-column>

        <el-table-column prop="studentId" label="申请学生ID" align="center">
        </el-table-column>

        <el-table-column prop="weekNumber" label="申请周次" align="center">
        </el-table-column>

        <el-table-column prop="sessionNumber" label="申请节次" align="center">
        </el-table-column>

        <el-table-column prop="labNumber" label="申请实验室编号" align="center">
        </el-table-column>

        <el-table-column
          prop="applicationReason"
          label="申请原因"
          align="center"
        >
        </el-table-column>

        <el-table-column prop="applicationDate" label="填报日期" align="center">
        </el-table-column>

        <el-table-column prop="status" label="申请状态" align="center">
        </el-table-column>
        <!-- 数字对应转换为文字 1 未审核、2 通过、3 驳回、4 使用完毕 -->

        <el-table-column prop="addr" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >修改</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.row)"
              >确认</el-button
            >
          </template>
        </el-table-column>
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
      form: {
        semesterId: "", // 初始化申请学期字段
        studentId: "",
        weekNumber: "",
        sessionNumber: "",
        labNumber: "",
        applicationReason: "",
      },
      semesters: [], // 存放已有的学期数据
      rules: {
        semesterId: [{ required: true, message: "请输入学期" }],
        studentId: [{ required: true, message: "请选择学生" }],
        weekNumber: [{ required: true, message: "请选择申请周次" }],
        sessionNumber: [{ required: true, message: "请选择申请节次" }],
        labNumber: [{ required: true, message: "请选择申请实验室编号" }],
        applicationReason: [{ required: true, message: "请选择申请原因" }],
      },
      // tableData: [],
      tableData: [
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
    // 在组件创建时获取已有的学期数据，可以根据实际情况从后端接口获取
    this.fetchSemesters();
    this.fetchTableData();
  },
  methods: {
    fetchSemesters() {
      // 模拟从后端接口获取学期数据，实际情况下需要替换成真实的后端请求
      // this.$api
      //   .student_loan_get()
      //   .then((result) => {
      //     this.semesters = result.data;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // // 这里使用 setTimeout 模拟异步请求
      // setTimeout(() => {
      //   // 假设从后端获取到的学期数据为 semestersData
      //   const semestersData = [
      //     { id: 1, name: '2022年春季学期' },
      //     { id: 2, name: '2022年秋季学期' },
      //     // 其他学期数据...
      //   ];
      //   // 将获取到的学期数据赋值给组件的 semesters 属性
      //   this.semesters = semestersData;
      // }, 1000); // 模拟延迟 1 秒
    },
    
    fetchTableData() {
      this.$api
        .student_loan_get()
        .then((result) => {
          result.data.forEach((item) => {
            //返回的applicationDate是一個年月日的數組,將其轉化為一個日期的格式
            item.applicationDate = new Date(item.applicationDate).toLocaleDateString();
            const newRecord = {
              id: item.id,
              studentId: item.studentId,
              weekNumber: item.weekNumber,
              sessionNumber: item.sessionNumber,
              labNumber: item.labNumber,
              applicationReason: item.applicationReason,
              applicationDate: item.applicationDate,
              //1是已修改，0是未修改，根據item.status顯示
              status: item.status === 1 ? '已修改' : '未修改'
            }
            // alert(newRecord)
            this.tableData.push(newRecord);
          })
          // this.tableData
        })
        .catch((err) => {
          console.log(err);
        });
    },
    submit() {
      this.$refs.form.validate((valid) => {
        // console.log(valid,'valid');
        if (valid) {
          // 后续对表单的处理
          // console.log(this.form,'form');
          if (this.modalType === 0) {
            addUser(this.form).then(() => {
              //.then() 方法用于指定在异步操作成功时,即用户添加成功后执行的回调函数
              this.getList();
            });
          } else {
            editUser(this.form).then(() => {
              this.getList();
            });
          }
          // addUser、editUser需要定义，可写在api然后再script的最前面 import { getUser, addUser, editUser, delUser } from '../../api'

          // 清空表单数据
          this.$refs.form.resetFields();
          // 关闭弹窗
          this.dialogVisible = false;
        }
      });
    },
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    handleEdit(row) {
      this.modalType = 1;
      this.dialogVisible = true;
      // 要对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    handleAdd() {
      this.modalType = 0;
      this.dialogVisible = true;
    },
    // handleAdd() {
    //   // 创建一个新的表单数据对象，根据实际需求进行初始化
    //   const newRecord = {
    //     id: 1, // 假设申请ID为1
    //     semesterId: 1, // 假设申请学期ID为1
    //     studentId: 1, // 假设申请学生ID为1
    //     weekNumber: 2, // 假设申请周次为2
    //     sessionNumber: 3, // 假设申请节次为3
    //     labNumber: 'A101', // 假设申请实验室编号为A101
    //     applicationReason: '实验室借用', // 假设申请原因为实验室借用
    //     applicationDate: new Date(), // 假设当前时间为申请日期
    //     status: 1 // 假设默认为未审核状态
    //   };

    //   // 将新的表单数据对象添加到表格数据数组中
    //   this.tableData.push(newRecord);

    //   // 将弹窗设置为新增模式，并显示弹窗
    //   this.modalType = 0;
    //   this.dialogVisible = true;
    // },

    //获取列表的数据
    getList() {
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(
        ({ data }) => {
          //合并对象属性
          console.log(data);
          this.tableData = data.list;
          this.total = data.count || 0;
        }
      );
    },
    // 选择页码的回调函数
    handlePage(val) {
      console.log(val);
      this.pageData.page = val;
      this.getList();
    },
    // 列表的查询
    onSubmit() {
      this.getList();
    },
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
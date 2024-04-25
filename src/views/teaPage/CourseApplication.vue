<template>
  <!-- <h3>实验课申请登记</h3> -->
  <div class="manage">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <!-- <span>这是一段信息</span> -->

      <!-- 用户的表单信息 -->
      <el-form ref="form" :rules="rules" :model="form" label-width="140px">
        <!-- :inline="true"移除 -->

        <!-- 下拉框for显示学期 -->
        <el-form-item label="上课学期" prop="semesterId">
          <el-select v-model="form.semesterId" placeholder="请选择上课学期">
            <el-option v-for="semester in semesters" :key="semester.id" :label="semester.name" :value="semester.id">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- <el-form-item label="申请教师" prop="teacherId">
          <el-input placeholder="请输入申请周次" v-model="form.teacherId"></el-input>
        </el-form-item> -->
        <!-- 感觉可能不需要，因为就是自己 -->

        <el-form-item label="课程名称" prop="courseName">
          <el-input placeholder="请输入课程名称" v-model="form.courseName"></el-input>
        </el-form-item>

        <el-form-item label="申请的实验室类型" prop="labType">
          <el-input placeholder="请输入申请的实验室类型" v-model="form.labType"></el-input>
        </el-form-item>

        <el-form-item label="班级" prop="studentClass">
          <el-input placeholder="请输入申请原因" v-model="form.studentClass"></el-input>
        </el-form-item>

        <el-form-item label="学生人数" prop="studentCount">
          <el-input placeholder="请输入学生人数" v-model="form.studentCount"></el-input>
        </el-form-item>

        <el-form-item label="起始周" prop="startWeek">
          <el-input placeholder="请输入起始周" v-model="form.startWeek"></el-input>
        </el-form-item>

        <el-form-item label="结束周" prop="endWeek">
          <el-input placeholder="请输入结束周" v-model="form.endWeek"></el-input>
        </el-form-item>

        <el-form-item label="节次" prop="sessionNumber">
          <el-input placeholder="请输入节次" v-model="form.sessionNumber"></el-input>
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

        <el-table-column prop="semesterId" label="申请学期ID" align="center">
        </el-table-column>
        <!-- id变对应学期数据 -->

        <el-table-column prop="teacherId" label="申请教师ID" align="center">
        </el-table-column>

        <el-table-column prop="courseName" label="课程名称" align="center">
        </el-table-column>

        <el-table-column prop="labType" label="申请的实验室类型" align="center">
        </el-table-column>

        <el-table-column prop="studentClass" label="班级" align="center">
        </el-table-column>

        <el-table-column prop="studentCount" label="学生人数" align="center">
        </el-table-column>

        <el-table-column prop="startWeek" label="起始周" align="center">
        </el-table-column>

        <el-table-column prop="endWeek" label="结束周" align="center">
        </el-table-column>

        <el-table-column prop="sessionNumber" label="节次" align="center">
        </el-table-column>

        <el-table-column prop="status" label="申请状态" align="center">
        </el-table-column>
        <!-- 数字对应转换为文字 0 未排课 1 已排课 -->

        <el-table-column prop="addr" label="操作" align="center">
          <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">修改</el-button>
              <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
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
        semesterId: '', // 初始化申请学期字段
        courseName: '',
        teacherId: '',
        courseName: '',
        labType: '',
        studentClass: '',
        studentCount: '',
        startWeek: '',
        endWeek: '',
        sessionNumber: '',
        // 似乎缺少一个星期几上课，不知道后端会不会自动排星期几
      },
      semesters: [], // 存放已有的学期数据
      rules: {
        semesterId: [
          { required: true, message: '请输入学期' }
        ],
        teacherId: [
          { required: true, message: '请输入申请周次' }
        ],
        courseName: [
          { required: true, message: '请输入课程名称' }
        ],
        labType: [
          { required: true, message: '请输入申请的实验室类型' }
        ],
        studentClass: [
          { required: true, message: '请输入班级' }
        ],
        studentCount: [
          { required: true, message: '请输入学生人数' }
        ],
        startWeek: [
          { required: true, message: '请输入起始周' }
        ],
        endWeek: [
          { required: true, message: '请输入结束周' }
        ],
        sessionNumber: [
          { required: true, message: '请输入节次' }
        ],
      },
      // tableData: [],
      tableData: [
        {
          id: 1,
          semesterId: 1,
          teacherId: 123,
          courseName: '计算机网络',
          labType: '计算机实验室',
          studentClass: '软件工程2021级8班',
          studentCount: 30,
          startWeek: 1,
          endWeek: 16,
          sessionNumber: '周一1-2节',
          status: 0
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
    // 在组件创建时获取已有的学期数据，可以根据实际情况从后端接口获取
    this.fetchSemesters();
  },

  methods: {
    fetchSemesters() {
      // 模拟从后端接口获取学期数据，实际情况下需要替换成真实的后端请求
      // 这里使用 setTimeout 模拟异步请求
      setTimeout(() => {
        // 假设从后端获取到的学期数据为 semestersData
        const semestersData = [
          { id: 1, name: '2022年春季学期' },
          { id: 2, name: '2022年秋季学期' },
          // 其他学期数据...
        ];
        // 将获取到的学期数据赋值给组件的 semesters 属性
        this.semesters = semestersData;
      }, 1000); // 模拟延迟 1 秒
    },


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
          // addUser、editUser需要定义，可写在api然后再script的最前面 import { getUser, addUser, editUser, delUser } from '../../api'

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

  }
}
</style>
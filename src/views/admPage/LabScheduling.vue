<template>
  <div class="expMange">
    <h3 style="line-height: 20px">教师申请实验室列表</h3>
    <el-table
      :data="tableData"
      style="width: 100%; line-height: 60px"
      max-height="600"
    >
      <el-table-column fixed prop="semester" label="学期" width="120">
      </el-table-column>
      <el-table-column prop="labType" label="实验室名称" width="150">
      </el-table-column>
      <el-table-column prop="labID" label="实验室编号" width="120">
      </el-table-column>
      <el-table-column prop="weeks" label="周次" width="120"> </el-table-column>
      <el-table-column prop="sessionNumber" label="节次" width="120">
      </el-table-column>
      <el-table-column prop="courseName" label="课程名" width="150">
      </el-table-column>
      <el-table-column prop="teacherName" label="任课教师" width="110">
      </el-table-column>
      <el-table-column prop="class" label="学生班级" width="130">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template v-slot="scope">
          <el-button type="text" size="small" v-if="scope.row.status" disabled
            >已安排实验室</el-button
          >
          <el-button type="text" @click="dialogFormVisible = true" size="small" v-else>安排实验室</el-button>
          <el-dialog title="安排实验室" :visible.sync="dialogFormVisible" append-to-body>
  <el-form :model="form">
    <el-form-item label="可安排实验室" :label-width="formLabelWidth">
      <el-select v-model="form.lab" placeholder="请选择实验室">
        <el-option label="实验室一" value="1"></el-option>
        <el-option label="实验室二" value="2"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  data() {
    return {
      tableData: [
        {
          semester: "2023-1",
          labType: "软件实验室",
          labID: 1,
          weeks: "4-12",
          sessionNumber: "3-4",
          courseName: "C语言程序设计",
          teacherName: "王老师",
          class: "21软工7",
          status: 1,
        },
        {
          semester: "2023-2",
          labType: "软件实验室",
          labID: 2,
          weeks: "1-12",
          sessionNumber: "3-4",
          courseName: "C语言程序设计",
          teacherName: "王老师",
          class: "21软工7",
          status: 0,
        },
        {
          semester: "2023-1",
          labType: "软件实验室",
          labID: 3,
          weeks: "4-16",
          sessionNumber: "3-4",
          courseName: "C语言程序设计",
          teacherName: "王老师",
          class: "21软工8",
          status: 1,
        },
      ],
      formInline: {
        user: "",
      },

      //安排实验室表单
      dialogFormVisible: false,
        form: {
          lab:''
        },
        formLabelWidth: '120px'
    };
  },
};
</script>
<style lang="less" scoped>
.el-main[data-v-54c38a05] {
  line-height: 100px;
}
</style>
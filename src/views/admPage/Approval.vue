<template>
  <div class="expMange">
    <h3 style="line-height: 20px">学生申请实验室审批</h3>
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
      <el-table-column prop="applicationReason" label="申请原因" width="200">
      </el-table-column>
      <el-table-column prop="stuName" label="学生姓名" width="110">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template v-slot="scope">
          <el-button type="text" size="small" v-if="scope.row.status==2" disabled
            >已通过</el-button>
            <el-button type="text" size="small" v-else-if="scope.row.status==3" disabled
            >已驳回</el-button>
            <el-button type="text" size="small" v-else-if="scope.row.status==4" disabled
            >使用完毕</el-button>
          <el-button type="text" size="small" v-else @click="dialogFormVisible = true"  >待审核</el-button>
          <el-dialog title="审核" :visible.sync="dialogFormVisible" append-to-body>
  <el-form :model="form">
    <el-form-item label="审核" :label-width="formLabelWidth">
      <el-select v-model="form.lab" placeholder="请选择">
        <el-option label="通过" value="2"></el-option>
        <el-option label="不通过" value="3"></el-option>
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
          applicationReason: "班会",
          stuName: "小王",
          status: 1,
        },
        {
          semester: "2023-2",
          labType: "软件实验室",
          labID: 2,
          weeks: "1-12",
          sessionNumber: "3-4",
          applicationReason: "班会",
          stuName: "小王",
          class: "21软工7",
          status: 2,
        },
        {
          semester: "2023-1",
          labType: "软件实验室",
          labID: 3,
          weeks: "4-16",
          sessionNumber: "3-4",
          applicationReason: "班会",
          stuName: "小王",
          class: "21软工8",
          status: 3,
        },
        {
          semester: "2023-1",
          labType: "软件实验室",
          labID: 3,
          weeks: "4-16",
          sessionNumber: "3-4",
          applicationReason: "班会",
          stuName: "小王",
          class: "21软工8",
          status: 4,
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
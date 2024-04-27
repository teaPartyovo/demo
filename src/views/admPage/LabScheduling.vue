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
      <!-- <el-table-column prop="labID" label="实验室编号" width="120">
      </el-table-column> -->
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
          <el-button type="text" @click="dialogFormVisible = true,fetchLabList(item)" size="small" v-else>安排实验室</el-button>
          <el-dialog title="安排实验室" :visible.sync="dialogFormVisible" append-to-body>
  <el-form :model="form">
    <el-form-item label="可安排实验室" :label-width="formLabelWidth">
      <el-select v-model="form.lab" placeholder="请选择实验室">
      <el-option
      v-for="item in labs"
      :key="item.id"
      :label="item.labName + '-' + item.labNumber"
      :value="item.id"
      ></el-option>
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
  created()
  {
      this.get_admin_classes();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  data() {
    return {
      labs: [], // 存储从后端获取的实验室列表数据
      form: {
      lab: '' // 用于存储选中的实验室值
      },
      tableData: [
        // {
        //   semester: "2023-1",
        //   labType: "软件实验室",
        //   labID: 1,
        //   weeks: "4-12",
        //   sessionNumber: "3-4",
        //   courseName: "C语言程序设计",
        //   teacherName: "王老师",
        //   class: "21软工7",
        //   status: 1,
        // },
        // {
        //   semester: "2023-2",
        //   labType: "软件实验室",
        //   labID: null,
        //   weeks: "1-12",
        //   sessionNumber: "3-4",
        //   courseName: "C语言程序设计",
        //   teacherName: "王老师",
        //   class: "21软工7",
        //   status: 0,
        // },
        // {
        //   semester: "2023-1",
        //   labType: "软件实验室",
        //   labID: 3,
        //   weeks: "4-16",
        //   sessionNumber: "3-4",
        //   courseName: "C语言程序设计",
        //   teacherName: "王老师",
        //   class: "21软工8",
        //   status: 1,
        // },
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
  methods: {
    async fetchLabList(item) {
      alert(item.id)
      try {
        // 调用后端接口获取实验室列表数据
        const id = item.id;
        const response = await this.$api.admin_classes_id(3);
        // 处理后端返回的数据
        if (response && response.data && Array.isArray(response.data)) {
          // 将后端返回的实验室数据转换为适合 <el-select> 组件使用的格式
          this.labs = response.data.map(lab => ({
            label: `${lab.labName}-${lab.labNumber}`, // 标签显示 labName-labNumber
            value: lab.id // 值为实验室的 id
          }));

          console.log('成功从后端获取实验室列表数据：', this.labs);
        } else {
          console.error('从后端获取的实验室列表数据为空或格式不正确');
        }
      } catch (error) {
        console.error('从后端获取实验室列表数据出错：', error);
        // 可选：向用户显示错误消息
      }
    },

  async get_admin_classes() {
    try {
      // 调用后端接口获取数据
      const response = await this.$api.admin_classes_get();

      // 处理后端返回的数据
      if (response.data && Array.isArray(response.data)) {
        // 将后端返回的数据保存到前端的 tableData 中
        this.tableData = response.data.map(item => ({
          semester: `${item.semester.year}-${item.semester.season}`,
          labType: item.labType,
          labID: null,
          weeks: `${item.startWeek}-${item.endWeek}`,
          sessionNumber: item.sessionNumber,
          courseName: item.courseName,
          teacherName: item.teacherName,
          class: item.studentClass,
          status: item.status,
          id: item.id,
        }));

        console.log('成功从后端获取数据：', this.tableData);
      } else {
        console.error('从后端获取的数据格式不正确：', response.data);
      }
    } catch (error) {
      console.error('从后端获取数据出错：', error);
      // 可选：向用户显示错误消息
    }
  },
}

};
</script>
<style lang="less" scoped>
.el-main[data-v-54c38a05] {
  line-height: 100px;
}
</style>
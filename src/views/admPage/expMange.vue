<template>
  <div class="expMange">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      style="line-height: 20px; text-align: left"
    >
      <el-form-item>
        <el-input v-model="formInline.user" placeholder="查找姓名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="margin-right: 580px" @click="onSubmit"
          >查询</el-button>

        <!-- 新增用户 -->
        <el-button type="primary" @click="dialogFormVisible = true"
          >添加用户</el-button
        >
        <el-dialog title="新增用户" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.year" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.weeks" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <!-- 新增用户 -->

        <!-- 批量添加用户 -->
        <el-upload
          accept=".xlsx,.xls"
          :file-list="fileList"
          :show-file-list="false"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          style="display: inline-block; margin-left: 10px;"
        >
          <el-button size="big" type="primary">上传添加批量用户</el-button>
        </el-upload>


      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%; line-height: 60px"
      max-height="600"
    >
      <el-table-column fixed prop="name" label="姓名" width="300">
      </el-table-column>
      <el-table-column prop="address" label="账号" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="密码" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            删除
          </el-button>
          <el-button type="text" size="small">修改</el-button>
          <el-button type="text" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    onSubmit() {
      console.log("submit!");
    },

    //文件
    handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
    }
  },
  data() {
    return {
      tableData: [
        {
          name: "王实验员",
          address: 202121210000,
          zip: 200333,
        },
        {
          name: "王实验员",
          address: 202121210000,
          zip: 200333,
        },
        {
          name: "王实验员",
          address: 202121210000,
          zip: 200333,
        },
        {
          name: "王实验员",
          address: 202121210000,
          zip: 200333,
        },
        {
          name: "王实验员",
          address: 202121210000,
          zip: 200333,
        },
      ],
      formInline: {
        user: "",
      },

      // 新增用户数据
      dialogFormVisible: false,
      form: {
        username: "",
        password: "",
      },
      formLabelWidth: "120px",

      //文件
      fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
    };
  },
};
</script>
<style lang="less" scoped>
.el-main[data-v-54c38a05] {
  line-height: 100px;
}
</style>
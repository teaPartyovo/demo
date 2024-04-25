<template>
  <div class="stuMange">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="line-height: 20px; text-align: left;">
      <el-form-item >
        <el-input v-model="formInline.user" placeholder="查找姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="margin-right: 630px;" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="add">添加用户</el-button>
        <el-button type="primary" @click="add">批量添加用户</el-button>
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
  },
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          address: 202121210000,
          zip: 200333,
        },{
          name: "王小虎",
          address: 202121210000,
          zip: 200333,
        },{
          name: "王小虎",
          address: 202121210000,
          zip: 200333,
        },{
          name: "王小虎",
          address: 202121210000,
          zip: 200333,
        },{
          name: "王小虎",
          address: 202121210000,
          zip: 200333,
        }
      ],
      formInline: {
        user: "",
      },
    };
  },
};
</script>
<style lang="less" scoped>
.el-main[data-v-54c38a05] {
  line-height: 100px;
}
</style>
<template>
  <div class="SemesterManage">
    <div class="header" style="line-height: 30px; text-align: left;">
      <!-- 设置当前学期 -->
      <i>设置当前学期 </i>
      <el-select
        v-model="value"
        placeholder="请选择学期"
        style="margin-right: 50px"
      >
        <el-option
          v-for="item in tableData"
          :key="item.date"
          :label="item.date"
          :value="item.date"
        >
        </el-option>
      </el-select>

      <!-- 添加学期按钮 -->
      <el-button type="text" @click="dialogFormVisible = true">添加新学期</el-button>
      <el-dialog title="新增学期" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="年份" :label-width="formLabelWidth">
            <el-input v-model="form.year" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="周数" :label-width="formLabelWidth">
            <el-input v-model="form.weeks" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="季度" :label-width="formLabelWidth">
            <el-select v-model="form.season" placeholder="请选择季度">
              <el-option label="春季" value="1"></el-option>
              <el-option label="秋季" value="2"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>

    <el-table
      ref="singleTable"
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%; line-height: 40px"
    >
      <el-table-column label="行数" type="index" width="100"> </el-table-column>
      <el-table-column property="date" label="年" width="300">
      </el-table-column>
      <el-table-column property="name" label="季度" width="200">
      </el-table-column>
      <el-table-column property="address" label="周数"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "春季",
          address: "19",
        },
        {
          date: "2016-05-04",
          name: "秋季",
          address: "18",
        },
      ],
      value: "",

      //添加学期数据
      dialogFormVisible: false,
      form: {
          year: '',
          season: '',
          weeks:''
        },
        formLabelWidth: '120px'
    };
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
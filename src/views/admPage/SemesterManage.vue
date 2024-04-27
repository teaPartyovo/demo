<template>
  <div class="SemesterManage">
    <div class="header" style="line-height: 30px; text-align: left;">
      <!-- 设置当前学期 -->
      <i>设置当前学期 </i>
      <el-select
        v-model="value"
        placeholder="请选择学期"
        style="margin-right: 50px"
        @change="handleSelectChange($event)"
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
              <el-option label="春季" value="2"></el-option>
              <el-option label="秋季" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false,resetForm()">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false,addNewSemester()"
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
        // {
        //   date: "2016-05-02",
        //   name: "春季",
        //   address: "19",
        // },
        // {
        //   date: "2016-05-04",
        //   name: "秋季",
        //   address: "18",
        // },
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
  created() {
    // 在组件创建时调用 API 获取数据
    this.settableData();
  },

methods: {
  async handleSelectChange(selectedValue) {
  try {
    console.log('选中的值:', selectedValue);

    // 解析选中的值，假设 selectedValue 格式为 'YYYY-M'，如 '2023-9' 或 '2023-3'
    const [yearStr, seasonStr] = selectedValue.split('-');
    const year = parseInt(yearStr); // 将年份转换为数字
    const season = seasonStr === '9' ? 1 : seasonStr === '3' ? 2 : null; // 解析季节

    if (year && season) {
      // 构造请求数据
      const requestData = {
        year: year,
        season: season,
        weeks: null // 如果需要传递周数，可以在此设置
      };

      // 调用后端接口 admin_semester_id，传递 year 和 season 参数
      const response = await this.$api.admin_semester_id(year, season);

      // 处理后端返回的数据
      if (response.code === 1) {
        console.log('学期设置成功！', response.message);
        alert("设置成功");
        // 可选：根据需要处理返回的数据
        if (response.data) {
          // 处理返回的数据 response.data
        }
      } else if (response.code === 0) {
        console.error('学期设置失败：', response.message);
        // 可选：向用户显示失败消息
      } else {
        console.error('未知状态码：', response.code);
        // 可选：向用户显示错误消息
      }
    } else {
      console.error('无效的选中值:', selectedValue);
    }
  } catch (error) {
    console.error('设置学期出错：', error);
    // 可选：向用户显示错误消息
  }
},



    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    settableData() {
      // 调用 API 获取数据
      this.$api.admin_semester_get()
        .then(response => {
          // 处理 API 返回的数据，转换成需要的 tableData 结构
          this.tableData = response.data.map(item => {
            let seasonName = item.season === 1 ? "秋季" : "春季";
            let date = item.season === 1 ? `${item.year}-9` : `${item.year}-3`;
            let address = item.weeks.toString();

            return {
              date: date,
              name: seasonName,
              address: address
            };
          });
          console.log(this.tableData); // 输出转换后的 tableData
        })
        .catch(error => {
          console.error('Error fetching semester data:', error);
        });
    },
    async addNewSemester() {
    try {
      // 准备要发送的数据
      const requestData = {
        year: this.form.year,
        season: parseInt(this.form.season), // 转换为数字
        weeks: parseInt(this.form.weeks) // 转换为数字
      };
      // 调用 $api.admin_semester_post 发送 POST 请求
      const response = await this.$api.admin_semester_post(requestData);
      // 处理成功响应（例如显示成功消息）
      console.log('学期添加成功！', response);
      // 可选：重置表单或关闭对话框
      this.dialogFormVisible = false;
      this.resetForm(); // 定义 resetForm() 方法来重置表单字段
      // 在添加学期后重新获取数据，更新表格
      his.settableData();
    } catch (error) {
      // 处理错误（例如显示错误消息）
      console.error('添加学期出错：', error);
      // 可选：向用户显示错误消息
    }
  },

    resetForm() {
      // 重置表单字段
      this.form.year = '';
      this.form.season = '';
      this.form.weeks = '';
    }
  },
};
</script>

<style lang="less" scoped>
</style>
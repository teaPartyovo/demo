<template>
  <div class="stuMange">
    <el-dialog
      title="用户信息"
      :visible.sync="dialogFormVisible"
      width="35%"
      :before-close="handleClose"
    >
      <el-form :model="form" :rules="rules" label-width="80px" ref="form">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="职称" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="account">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>

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
          >查询</el-button
        >

        <!-- 新增用户 -->
        <el-button type="primary" @click="handleAdd">添加用户</el-button>
        <!-- 新增用户 -->

        <!-- 批量添加用户 -->
        <el-upload
          accept=".xlsx,.xls"
          :file-list="fileList"
          :show-file-list="false"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleFileUpload"
          style="display: inline-block; margin-left: 10px"
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
      <el-table-column fixed prop="name" label="姓名" width="200">
      </el-table-column>
      <el-table-column prop="title" label="职称" width="120"> </el-table-column>
      <el-table-column prop="account" label="账号" width="200">
      </el-table-column>
      <!-- <el-table-column prop="password" label="密码" width="120">
      </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button @click="handleDelete(scope.row)" type="text" size="small">
            删除
          </el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)"
            >修改</el-button
          >
          <el-button type="text" size="small" @click="handleReset(scope.row)"
            >重置密码</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.admin_user_get();
  },
  methods: {
    //添加或编辑信息确认
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          //通过表单验证
          if (this.modaltype === 0) {
            // 添加表单提交
            console.log(this.form);
            this.$api.admin_user_post(null,this.form.account,this.form.password,this.form.name,"3",this.form.title,null,null);
            // this.admin_user_get();
            // location.reload();
            //关闭弹窗
            this.dialogFormVisible = false;
            
          } else {
            //编辑表单提交
            this.$api.admin_user_put(this.form.id,this.form.account,this.form.password,this.form.name,"3",this.form.title,null,null);
            console.log(this.form);
            //关闭弹窗
            this.dialogFormVisible = false;
          }
        }
      });
    },
    //删除确认
    handleDelete(row) {
      this.$confirm("此操作将永久删除该账户信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api.admin_user_delete(row.id);
          this.admin_user_get();
          // location.reload();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //重置密码
    handleReset(row) {
      this.$confirm("是否确定重置该用户密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api.admin_reset(row.id);
          this.$message({
            type: "success",
            message: "重置成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消重置",
          });
        });
    },
    //添加
    handleAdd() {
      this.modaltype = 0;
      this.dialogFormVisible = true;
    },
    //关闭
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogFormVisible = false;
    },
    //修改
    handleEdit(row) {
      this.modaltype = 1;
      this.dialogFormVisible = true;
      // this.row_id = row.id;
      // this.id=row.id
      // 要对当前行数据进行深拷贝
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleFileUpload(file) {
      this.$api
        .admin_user_upload(file.raw)
        .then((response) => {
          // 处理服务器的响应
          console.log(response);
        })
        .catch((error) => {
          // 处理错误
          console.error("Error in admin_user_upload:", error);
        });
    },
    async admin_user_get() {
      try {
        const response = await this.$api.admin_user_get(3, 1, 100000, null);
        //alert(JSON.stringify(response));
        if (response.data && Array.isArray(response.data)) {
          // 将后端返回的数据保存到前端的 tableData 中

          this.tableData = response.data.map((item) => ({
            name: item.name,
            title: item.title,
            account: item.username,
            id:item.id,
          }));
          // alert(JSON.stringify(this.tableData))
          // 从后端获取实验室列表数据

          console.log("成功从后端获取数据：", this.tableData);
        } else {
          console.error("从后端获取的数据格式不正确：", response.data);
        }
      } catch (error) {
        console.error("Error in admin_user_get:", error);
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    //查询
    async onSubmit() {
      try {
        const response = await this.$api.admin_user_get(
          3,
          1,
          100000,
          this.formInline.user
        );
        //alert(JSON.stringify(response));
        if (response.data && Array.isArray(response.data)) {
          // 将后端返回的数据保存到前端的 tableData 中

          this.tableData = response.data.map((item) => ({
            name: item.name,
            title: item.title,
            account: item.username,
            id:item.id,
          }));
          // alert(JSON.stringify(this.tableData))
          // 从后端获取实验室列表数据

          console.log("成功从后端获取数据：", this.tableData);
        } else {
          console.error("从后端获取的数据格式不正确：", response.data);
        }
      } catch (error) {
        console.error("Error in admin_user_get:", error);
      }
    },

    //文件
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
  },
  data() {
    return {
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        title: [{ required: true, message: "请输入职称" }],
        account: [{ required: true, message: "请输入账号" }],
        password: [{ required: true, message: "请输入密码" }],
      },
      users: [], // 用于存储后端返回的数据
      tableData: [
        // {
        //       name: "王老师",
        //       address: 202121210000,
        //       zip: 200333,
        //     },{
        //       name: "王老师",
        //       address: 202121210000,
        //       zip: 200333,
        //     },{
        //       name: "王老师",
        //       address: 202121210000,
        //       zip: 200333,
        //     },{
        //       name: "王老师",
        //       address: 202121210000,
        //       zip: 200333,
        //     },{
        //       name: "王老师",
        //       address: 202121210000,
        //       zip: 200333,
        //     }
      ],
      formInline: {
        user: "",
      },

      // 新增用户数据
      dialogFormVisible: false,
      form: {
        name: "",
        title: "",
        account: "",
        password: "",
      },

      //文件
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
};
</script>
<style lang="less" >
.el-dialog__header {
    height: 60px;
    padding: 5px 5px 10px;
}
.dialog-footer {
  height: 90px;
}
.el-dialog__body {
  padding-bottom: 0;
}
</style>

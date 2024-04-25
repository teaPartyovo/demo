<template>
  <div class="Header">
    <div class="left">你好 , 用户 !</div>
    <el-button type="text" @click="centerDialogVisible = true">登录</el-button>
    <el-dialog
      title="系统登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
    <el-form class="login-container" ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
     
    </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit"
          >登录</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
  
<script>
import axios from 'axios';
import Cookie from 'js-cookie';
import mock from '@/mock/mock.js';
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        role: "",
      },
      centerDialogVisible: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    submit() {
      axios.get('http://localhost:8080/login1')
        .then(function (res) {
          alert(res.data);
        }).catch(function(res){
          alert(res);
        });
      //this.$router.push('/admin');
    }
    // submit() {
      
    //   //this.$router.push('/admin');
    // }
  },
};
</script>
  
  <style lang="less" scoped>
.Header {
  background-color: #2e2e2e;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
</style>
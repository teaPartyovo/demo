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
import Cookies from 'js-cookie';
import mock from '@/mock/index.js';
import router from '@/router';
import global from '@/views/Global'
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
    submit() {
      const{name, password} = this.form;
      this.$api.login(name, password)
        .then(function (res) {
          //alert(res.data.token);
          // alert(res.data.role);
          // alert(JSON.stringify(res.data))
          if(!res.data){
            alert("账号或密码错误");
            return ;
          }

          Cookies.set('token',res.data.token);
          if(res.data.role == 1){
            router.replace('/admin');
          }
          else if(res.data.role == 2){
            router.replace('/exper');
          }
          else if(res.data.role == 3){
            router.replace('/tea');
          }
          else{
            router.replace('/stu');
          }
        }).catch(function(res){
          alert(res);
        });
    }
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
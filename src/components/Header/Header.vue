<template> 
  <div class="Header">
    <div class="left">你好,<i>{{userName}}</i> !</div>
    <div class="right">
      <el-button type="text" @click="centerDialogVisible = true">退出登录</el-button>

      <el-dialog
        title="提示"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <span>是否退出登录</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="quit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    
  </div>
</template>

<script>
import router from '@/router';
import global from '@/views/Global'
export default {
    data() {
      return {
        centerDialogVisible: false,
        userName:global.userName
      };
    },
    methods:{
      quit(){
        router.replace('/');
      }
    }
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
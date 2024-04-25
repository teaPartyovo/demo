<template>
  <div class="main">
    <el-container>
    <el-aside width="200px">
        <Aside/>
    </el-aside>
    <el-container>
        <el-header>
            <Head></Head>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script >
import Aside from '../components/Aside/TeacherAside.vue'
import Head from '../components/Header/Header.vue'
export default {
    components: {
        Aside,
        Head
    }
}
</script>

<style lang="less" scoped>
    .el-header, .el-footer {
    background-color: #2e2e2e;
    color: white;
    text-align: center;
    //line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
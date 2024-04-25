<template>
    <div class="main">
      <el-container>
      <el-aside width="200px">
          <vAside/>
      </el-aside>
      <el-container>
          <el-header>
              <v-header/>
          </el-header>
          <el-main>
              <router-view/>
          </el-main>
      </el-container>
      </el-container>
    </div>
  </template>
  
  <script >
  import vHeader from '../components/Header/visterHeader.vue'
  import vAside from '../components/Aside/VisiterAside.vue'
  import Home from './home.vue'
  export default {
      components: {
          vHeader,
          vAside,
          Home
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
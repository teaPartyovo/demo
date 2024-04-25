<template>
    <div class="home">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item  index="0" disabled>
              <span slot="title" style="font-size: larger"
                >计算机系实验管理平台</span
              >
            </el-menu-item>
            <el-menu-item index="1">
              <span slot="title">首页</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  
  <style lang="less" scoped>
  .el-menu-vertical-demo {
    width: 200px;
    height: 100%;
  }
  </style>
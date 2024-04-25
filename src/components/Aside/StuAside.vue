<template>
    <div class="home">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="0" disabled>
              <span slot="title" style="font-size: larger"
                >计算机系实验管理平台</span
              >
            </el-menu-item>
            <el-menu-item
              v-for="item in noChildren"
              :key="item.id"
              :index="item.id"
              @click="clickMenu(item)"
            >
              <span slot="title">{{ item.label }}</span>
            </el-menu-item>
            <!-- <el-menu-item index="3">
              <span slot="title">实验室排课</span>
            </el-menu-item> -->
            <el-submenu
              v-for="item in hasChildren"
              :key="item.label"
              :index="item.label"
            >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ item.label }}</span>
              </template>
              <el-menu-item-group
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <el-menu-item :index="subItem.id" @click="clickMenu(subItem)">{{
                  subItem.label
                }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 侧栏菜单 叫Menu也行 名字不影响
        adminMenu: [
          {
            id: 1,
            label: "首页",
            path: "/shome",
          },
          {
            id: 2,
            label: "实验室借用申请",
            path: "/lab-application",
          },
        ],
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        1;
        console.log(key, keyPath);
      },
      clickMenu(item) {
        if (
          this.$route.path !== item.path
        ) {
          this.$router.push(item.path);
        }
      },
    },
    computed: {
      //没有子菜单
      noChildren() {
        return this.adminMenu.filter((item) => !item.children);
      },
      //有子菜单
      hasChildren() {
        return this.adminMenu.filter((item) => item.children);
      },
    },
  };
  </script>
  
  
  <style lang="less" scoped>
  .el-menu-vertical-demo {
    width: 199.9px;
    height: 100vh;
  }
  </style>
<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="0" disabled>
            <span slot="title" style="font-size: larger">计算机系实验管理平台</span>
          </el-menu-item>

          <el-menu-item v-for="item in noChildren" :key="item.id" :index="item.label" @click="clickMenu(item)">
            <span slot="title">{{ item.label }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminMenu: [
        {
          id: 1,
          label: "首页",
          path: "/ehome",
        },
        {
          id: 2,
          label: "设备报修处理",
          path: "/repair-handling",
        }

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
    }
  },
};
</script>


<style lang="less" scoped>
.el-menu-vertical-demo {
  width: 199.9px;
  height: 100vh;
}
</style>
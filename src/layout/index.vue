<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ fold: settingStore.fold }">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="white"
          :default-active="$route.path"
          :collapse="settingStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{ fold: settingStore.fold }">
      <Tabbar />
    </div>
    <div class="layout_main" :class="{ fold: settingStore.fold }">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Tabbar from './tabbar/index.vue';
import Main from './main/index.vue';
import useUserStore from '@/store/modules/user';
import { useRoute } from 'vue-router';
import useSettingStore from '@/store/modules/setting';

let settingStore = useSettingStore();

const userStore = useUserStore();
const $route = useRoute();
</script>
<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background: yellowgreen;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>

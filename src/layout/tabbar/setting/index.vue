<template>
  <el-button icon="Refresh" size="small" @click="refresh" circle />
  <el-button icon="FullScreen" size="small" @click="fullscreen" circle />
  <el-button icon="Setting" size="small" circle />
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';

let settingStore = useSettingStore();
let userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();

const refresh = () => {
  settingStore.refresh = !settingStore.refresh;
};

const fullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const logout = async () => {
  await userStore.userLogout();
  $router.push({
    path: '/login',
    query: {
      redirect: $route.fullPath,
    },
  });
};
</script>

<script lang="ts">
export default {
  name: 'Setting',
};
</script>

<style></style>

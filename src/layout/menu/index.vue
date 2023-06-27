<template>
  <template v-for="(menu, index) in menuList" :key="menu.path">
    <template v-if="!menu.meta.hidden">
      <el-menu-item
        v-if="
          !menu.children ||
          menu.children.filter((m) => !m.meta.hidden).length == 0
        "
        :index="menu.path"
        @click="goTo"
      >
        <el-icon><component :is="menu.meta.icon" /></el-icon>
        <template #title>
          <span>{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="
          menu.children &&
          menu.children.filter((m) => !m.meta.hidden).length == 1
        "
        :index="menu.path"
        @click="goTo"
      >
        <el-icon>
          <component
            :is="menu.children.filter((m) => !m.meta.hidden)[0].meta.icon"
          ></component>
        </el-icon>
        <template #title>
          <span>
            {{ menu.children.filter((m) => !m.meta.hidden)[0].meta.title }}
          </span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="menu.children && menu.children.length > 1"
        :index="menu.path"
      >
        <template #title>
          <el-icon><component :is="menu.meta.icon" /></el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <Menu :menu-list="menu.children"></Menu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList']);

import { useRouter } from 'vue-router';
const $router = useRouter();

const goTo = (vc: any) => {
  $router.push(vc.index);
};
</script>
<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<style></style>

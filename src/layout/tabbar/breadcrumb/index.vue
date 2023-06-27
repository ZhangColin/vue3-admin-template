<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="settingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="margin: 0px 5px">
        <component :is="item.meta.icon" />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting';
import { useRoute } from 'vue-router';

const $route = useRoute();

let settingStore = useSettingStore();

const changeIcon = () => {
  settingStore.fold = !settingStore.fold;
};
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
};
</script>

<style></style>

<template>
  <div class="logo">
    <img :src="setting.logo" alt="" v-if="!setting.logoHidden" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
</script>

<script lang="ts">
export default {
  name: 'Logo',
};
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  padding: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    color: white;
    font-size: $base-menu-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="show" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import useSettingStore from '@/store/modules/setting';
let settingStore = useSettingStore();
let show = ref(true);

watch(
  () => settingStore.refresh,
  () => {
    show.value = false;
    nextTick(() => {
      show.value = true;
    });
  },
);
</script>
<script lang="ts">
export default {
  name: 'Main',
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>

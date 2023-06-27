<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Cartisan</h1>
          <h2>后台管理系统</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              size="default"
              class="login_btn"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import useUserStore from '@/store/modules/user';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time';

const useStore = useUserStore();
const router = useRouter();
const route = useRoute();

let loginForm = reactive({ username: 'admin', password: 'atguigu123' });
let loading = ref(false);

const validateUserName = (_rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error('账号必须大于 5 位'));
  }
};
const validatePassword = (_rule: any, value: any, callback: any) => {
  if (value.length >= 5 && value.length <= 10) {
    callback();
  } else {
    callback(new Error('密码必须 6-10 位'));
  }
};

const rules = {
  username: [
    {
      validator: validateUserName,
      trigger: 'change',
    },
  ],
  password: [
    {
      validator: validatePassword,
      trigger: 'change',
    },
  ],
};

let loginForms = ref();

const login = async () => {
  await loginForms.value.validate();
  loading.value = true;
  try {
    await useStore.userLogin(loginForm);
    router.push(route.query.redirect || '/');
    ElNotification({
      type: 'success',
      title: '欢迎回来',
      message: `HI, ${getTime()}好`,
    });
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    });
  }
  loading.value = false;
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>

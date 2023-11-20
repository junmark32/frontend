<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">Student Login</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="username" class="form-label">Username:</label>
                  <input type="text" v-model="username" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password:</label>
                  <input type="password" v-model="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login(){
      const d = await axios.post("login",{
        username: this.username,
        password: this.password
      });
      if(d.data.ms === 'okay'){
        sessionStorage.setItem("token", d.data.token)
        router.push('/Home');
      }
    }
  },
};
</script>

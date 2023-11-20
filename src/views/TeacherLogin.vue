<template>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="login">
        <div v-if="message === 'error'">Invalid credentials</div>
  
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
  
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
  
        <router-link to="/register">Register</router-link>
      </v-form>
    </v-sheet>
  </template>
  
  <script>
  import router from '@/router';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: null,
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('teacher/login', {
            username: this.username,
            password: this.password,
          });
  
          this.message = response.data.msg; // Corrected this line
  
          if (response.data.msg === 'okay') {
            sessionStorage.setItem('token', response.data.token); // Corrected this line
            router.push('/Teacher/Home');
          }
        } catch (error) {
          console.error('Login failed:', error);
          this.message = 'error';
        }
      },
    },
  };
  </script>
  
  
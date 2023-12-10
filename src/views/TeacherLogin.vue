<template>
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="login">
        <div v-if="message === 'error'">Invalid credentials</div>
  
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field v-model="password" label="Password" type="password"></v-text-field>
  
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
  
        <router-link to="/Teacher/Register">Register</router-link>
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

          if (response.data.msg === 'okay' && response.data.teacher_id) {
            // Store student_id in local storage
            localStorage.setItem('teacher_id', response.data.teacher_id);

            // Log the stored student_id for verification
            console.log('Stored teacher_id:', localStorage.getItem('teacher_id'));

            // Redirect to student home page
            router.push('/Teacher/Home');
          } else {
            console.error('Invalid response from the server:', response.data);
          }
        } catch (error) {
          console.error('Error during login request:', error);
        }
      },
    },
  };
  </script>
  
  
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="login">
      <div v-if="message === 'error'">Invalid response</div>

      <v-text-field v-model="username" label="Username"></v-text-field>

      <v-text-field v-model="password" label="Password" type="password"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>

      <router-link to="/Student/Register">Register</router-link>
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
      message: [],
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('login', {
          username: this.username,
          password: this.password,
        });

        if (response.data.msg === 'okay' && response.data.student_id) {
          // Store student_id in local storage
          localStorage.setItem('student_id', response.data.student_id);

          // Log the stored student_id for verification
          console.log('Stored student_id:', localStorage.getItem('student_id'));

          // Redirect to student home page
          router.push('/Student/Home');
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

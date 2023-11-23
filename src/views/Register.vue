<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="register">
      <!-- Display error message for invalid responses -->
      <div v-if="message === 'error'">Invalid response</div>

      <!-- Input fields for username, password, and password confirmation -->
      <v-text-field v-model="username" label="Username"></v-text-field>
      <v-text-field v-model="password" label="Password" type="password"></v-text-field>
      <v-text-field v-model="passwordConfirm" label="Password Confirm" type="password"></v-text-field>

      <!-- Display error message if passwords do not match -->
      <div v-if="message === 'passwordMismatch'">Passwords do not match</div>

      <!-- Submit button -->
      <v-btn type="submit" block class="mt-2">Submit</v-btn>

      <!-- Link to login page -->
      <router-link to="/Student/Login">Login</router-link>
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
      passwordConfirm: '',
      message: null, // Change from array to null for better handling
    };
  },
  methods: {
    async register() {
      try {
        // Check if passwords match
        if (this.password === this.passwordConfirm) {
          // Make API request to register user
          const response = await axios.post("register", {
            username: this.username,
            password: this.password,
          });

          // Check the response status
          if (response.status === 200) {
            // Registration successful
            alert("Registered successfully");
            router.push('/Student/Login');
          } else {
            // Registration failed, set appropriate error message
            this.message = 'error';
          }
        } else {
          // Passwords do not match, set error message
          this.message = 'passwordMismatch';
        }
      } catch (error) {
        // Handle other errors (e.g., network issues)
        console.error('Error during registration:', error);
        this.message = 'error';
      }
    },
  },
};
</script>

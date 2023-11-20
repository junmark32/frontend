<template> 

  <v-sheet width="300" class="mx-auto"> 

    <v-form fast-fail @submit.prevent="login"> 

      <div v-if="message === 'error'">invalid response</div> 

       

      <v-text-field 

        v-model="username" 

        label="Username" 

      ></v-text-field> 

 

      <v-text-field 

        v-model="password" 

        label="Password" 

        type="password" 

      ></v-text-field> 

 

      <v-btn type="submit" block class="mt-2">Submit</v-btn> 

      <router-link to="/register">register</router-link> 

    </v-form> 

  </v-sheet> 

</template> 

<script> 

import router from '@/router'; 

import axios from 'axios'; 

  export default { 

    data(){ 

      return { 

          username: '', 

          password: '', 

          message: [], 

      } 

    }, 

    methods:{ 

      async login(){ 

          const data = await axios.post("login",{ 

            username: this.username, 

            password: this.password 

          }); 

           

          if(data.data.msg ==='okay'){ 

            

            router.push('/Student/Home'); 

          } 

           

      } 

  } 

  } 

</script> 
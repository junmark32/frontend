<template>
    <div>
      <Head_nav />
      <Main_comp />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Import the JavaScript files
  import ApexCharts from '@/assets/vendor/apexcharts/apexcharts.min.js';
  import Bootstrap from '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
  import Chart from '@/assets/vendor/chart.js/chart.umd.js';
  import ECharts from '@/assets/vendor/echarts/echarts.min.js';
  import Quill from '@/assets/vendor/quill/quill.min.js';
  import SimpleDatatables from '@/assets/vendor/simple-datatables/simple-datatables.js';
  import TinyMCE from '@/assets/vendor/tinymce/tinymce.min.js';
  import Validate from '@/assets/vendor/php-email-form/validate.js';
  
  import Main from '@/assets/js/main.js';
  
  // Components
  import Head_nav from '../components/comp/Head_nav.vue';
  import Main_comp from '../components/Main_comp.vue';
  
  export default defineComponent({
    name: 'index',
    props: ['topicId'],
  
    components: {
      Head_nav,
      Main_comp,
    },
  
    // Your component options here
    created() {
      // Example usage of imported components
      console.log(ApexCharts);
      console.log(Bootstrap);
      console.log(Chart);
      console.log(ECharts);
      console.log(Quill);
      console.log(SimpleDatatables);
      console.log(TinyMCE);
      console.log(Validate);
      console.log(Main);
    }
  });
  </script>
  
  <style>
  /* fonts */
  @import url('https://fonts.gstatic.com');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i');
  /* <!-- Favicons --> */
  /* @import '@/assets/img/favicon.png';
  @import '@/assets/img/apple-touch-icon.png'; */
  
  /* <!-- Vendor CSS Files --> */
  @import '../assets/vendor/bootstrap/css/bootstrap.min.css';
  @import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
  @import '../assets/vendor/boxicons/css/boxicons.min.css';
  @import '../assets/vendor/quill/quill.snow.css';
  @import '../assets/vendor/quill/quill.bubble.css';
  @import '../assets/vendor/remixicon/remixicon.css';
  @import '../assets/vendor/simple-datatables/style.css';
  
  
  /* <!-- Template Main CSS File --> */
  @import '../assets/css/style.css';
  </style>
  
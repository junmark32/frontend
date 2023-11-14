<template>
  

    <main id="main" class="main">

  

      <div class="pagetitle">
        <h1>{{ topicName }}</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item">Subjects</li>
            <li class="breadcrumb-item active">{{ topicName }}</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->


    <section class="section">
      <div class="row">


          <div v-for="discussion in discussions" :key="discussion.discussion_id" class="card">
            <div class="card-body">
              <h5 class="card-title">{{ discussion.content_title }}</h5>
              <p>
                {{ discussion.content_data }}
              </p>
              
            </div>
          </div>
      </div>

      <div id="progress-container">
        <div id="progress-bar" class="progress" style="height: 5px;">
          <div id="progress" class="progress-bar" role="progressbar" style="width: 0%;"></div>
        </div>
      </div>
    </section>
</main>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';


export default {
  data() {
    return {
      topicName: '',
      discussions: [],
    };
  },
  mounted() {
    const topicId = this.$route.params.topicId;
    this.getTopicData(topicId);
    this.jqueryLoaded();
  },
  methods: {
  async getTopicData(topicId) {
    try {
      const response = await axios.get(`topics/${topicId}`);
      this.topicName = response.data.topic_name;
      this.discussions = response.data.discussions;

      // Using $nextTick to ensure DOM is updated before manipulating it
      this.$nextTick(() => {
        this.jqueryLoaded();
      });
    } catch (error) {
      console.error('Error fetching topic data:', error);
    }
  },
  jqueryLoaded() {
    $(document).ready(() => {
      $(window).on('scroll', () => {
        const scrollWin = $(window).scrollTop();
        const docHeight = $(document).height();
        const winHeight = $(window).height();
        const scrolled = (scrollWin / (docHeight - winHeight)) * 100;
        $('#progress').css('width', scrolled + '%');
      });
    });
  },
},

};
</script>

<style>
#progress-container {
      position: fixed;
      bottom: 10px;
      width: 100%;
      z-index: 1030;
    }
</style>
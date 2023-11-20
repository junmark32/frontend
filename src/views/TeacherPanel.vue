<template>
    <div>
      <h2>Add Subject</h2>
      <form @submit.prevent="addSubject">
        <label>Subject Name:</label>
        <input v-model="subjectName" required />
        <label>Course Name:</label>
        <select v-model="courseName" required>
          <option v-for="course in courses" :key="course.course_id">{{ course.course_name }}</option>
        </select>
        <button type="submit">Add Subject</button>
      </form>
  
      <h2>Add Topic</h2>
      <form @submit.prevent="addTopic">
        <label>Topic Name:</label>
        <input v-model="topicName" required />
        <label>Subject Name:</label>
        <select v-model="subjectNameForTopic" required>
          <option v-for="subject in subjects" :key="subject.subject_id">{{ subject.subject_name }}</option>
        </select>
        <button type="submit">Add Topic</button>
      </form>
  
      <h2>Add Discussion</h2>
      <form @submit.prevent="addDiscussion">
        <label>Content Type:</label>
        <input v-model="contentType" required />
        <label>Content Data:</label>
        <input v-model="contentData" required />
        <label>Topic Name:</label>
        <select v-model="topicNameForDiscussion" required>
          <option v-for="topic in topics" :key="topic.topic_id">{{ topic.topic_name }}</option>
        </select>
        <button type="submit">Add Discussion</button>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';


  export default {
    data() {
      return {
        subjectName: "",
        courseName: "",
        topicName: "",
        subjectNameForTopic: "",
        contentType: "",
        contentData: "",
        topicNameForDiscussion: "",
        courses: [], // Array to store existing courses
        subjects: [], // Array to store existing subjects
        topics: [], // Array to store existing topics
      };
    },
    created() {
      // Fetch existing courses, subjects, and topics when the component is created
      this.fetchCourses();
      this.fetchSubjects();
      this.fetchTopics();
    },
    methods: {
      // Function to fetch existing courses
      fetchCourses() {
        axios.get("teacher/courses") // Replace with your actual API endpoint
          .then(response => {
            this.courses = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      // Function to fetch existing subjects
      fetchSubjects() {
        axios.get("teacher/subjects") // Replace with your actual API endpoint
          .then(response => {
            this.subjects = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      // Function to fetch existing topics
      fetchTopics() {
        axios.get("teacher/topics") // Replace with your actual API endpoint
          .then(response => {
            this.topics = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
      addSubject() {
        // Make API request to add subject
        // Example using axios:
        axios.post("teacher/addSubject", {
          subject_name: this.subjectName,
          course_name: this.courseName,
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      },
      addTopic() {
        // Make API request to add topic
        // Example using axios:
        axios.post("teacher/addTopic", {
          topic_name: this.topicName,
          subject_name: this.subjectNameForTopic,
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      },
      addDiscussion() {
        // Make API request to add discussion
        // Example using axios:
        axios.post("teacher/addDiscussion", {
          content_type: this.contentType,
          content_data: this.contentData,
          topic_name: this.topicNameForDiscussion,
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
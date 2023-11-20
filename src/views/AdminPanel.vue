<template>
  <div>
    <!-- Insert Course Section -->
    <h2>Insert Course</h2>

    <form @submit.prevent="insertCourse">
      <div>
        <label for="courseName">Course Name:</label>
        <input type="text" v-model="courseName" required>
      </div>

      <!-- Add more fields as needed -->

      <div>
        <button type="submit">Insert Course</button>
      </div>
    </form>

    <!-- Assign Teacher Section -->
    <h2>Assign Teacher to Course</h2>

    <form @submit.prevent="assignTeacher">
      <div>
        <label for="teacherId">Select Teacher:</label>
        <select v-model="teacherId" required>
          <option value="" disabled>Select Teacher</option>
          <option v-for="teacher in teachers" :key="teacher.teacher_id" :value="teacher.teacher_id">
            {{ teacher.username }}
          </option>
        </select>
      </div>

      <div>
        <label for="courseId">Select Course:</label>
        <select v-model="courseId" required>
          <option value="" disabled>Select Course</option>
          <option v-for="course in courses" :key="course.course_id" :value="course.course_id">
            {{ course.course_name }}
          </option>
        </select>
      </div>

      <div>
        <button type="submit">Assign Teacher</button>
      </div>
    </form>

    <!-- Assign Student Section -->
    <h2>Assign Student to Course</h2>

    <form @submit.prevent="assignStudent">
      <div>
        <label for="studentId">Select Student:</label>
        <select v-model="studentId" required>
          <option value="" disabled>Select Student</option>
          <option v-for="student in students" :key="student.student_id" :value="student.student_id">
            {{ student.username }}
          </option>
        </select>
      </div>

      <div>
        <label for="courseId">Select Course:</label>
        <select v-model="courseId" required>
          <option value="" disabled>Select Course</option>
          <option v-for="course in courses" :key="course.course_id" :value="course.course_id">
            {{ course.course_name }}
          </option>
        </select>
      </div>

      <div>
        <button type="submit">Assign Student</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courseName: '',
      teacherId: '',
      studentId: '',
      courseId: '',
      teachers: [],
      students: [],
      courses: [],
    };
  },
  methods: {
    insertCourse() {
      axios.post('admin/insertCourse', {
        course_name: this.courseName,
      })
      .then(response => {
        console.log(response.data);
        alert('Course inserted successfully!');
        // Optionally, you can reset the form or update the course list
        this.courseName = '';
        this.fetchCourses();
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Failed to insert course. Please try again.');
      });
    },

    assignTeacher() {
      axios.post('admin/assignTeacherToCourse', {
        teacher_id: this.teacherId,
        course_id: this.courseId,
      })
      .then(response => {
        console.log(response.data);
        alert('Teacher assigned to the course successfully!');
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Failed to assign teacher to the course. Please try again.');
      });
    },

    assignStudent() {
      axios.post('admin/assignStudentToCourse', {
        student_id: this.studentId,
        course_id: this.courseId,
      })
      .then(response => {
        console.log(response.data);
        alert('Student assigned to the course successfully!');
      })
      .catch(error => {
        console.error(error.response.data);
        alert('Failed to assign student to the course. Please try again.');
      });
    },

    // Add a method to fetch teachers, students, and courses
    fetchTeachers() {
      axios.get('admin/getTeachers')
        .then(response => {
          this.teachers = response.data;
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },

    fetchStudents() {
      axios.get('admin/getStudents')
        .then(response => {
          this.students = response.data;
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },

    fetchCourses() {
      axios.get('admin/getCourses')
        .then(response => {
          this.courses = response.data;
        })
        .catch(error => {
          console.error(error.response.data);
        });
    },
  },
  mounted() {
    // Fetch lists when the component is mounted
    this.fetchTeachers();
    this.fetchStudents();
    this.fetchCourses();
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>

<template>
<div class="sb-nav-fixed">

  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <!-- Navbar Brand-->
            <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <!-- Sidebar Toggle-->
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <!-- Navbar Search-->
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <!-- Navbar-->
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="#sectiondashBoard">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <a class="nav-link" href="#sectionInsert">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Insert
                            </a>
                            <a class="nav-link" href="#updateSection">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Update
                            </a>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        {{teacher.username}}
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4" >
                        <h1 class="mt-4" id="sectiondashBoard">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-primary text-white mb-4">
                                    <div class="card-body">Primary Card</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body">Warning Card</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">Success Card</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6">
                                <div class="card bg-danger text-white mb-4">
                                    <div class="card-body">Danger Card</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div> 

                      <div class="container-fluid px-4"  id="sectionInsert">
                        <h1 class="mt-4">Insert</h1>
                        <!-- Floating Labels Form -->
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Add Subject</h5>
                            <form class="row g-3" @submit.prevent="addSubject" >
                              <div class="mb-3">
                                <label for="subjectName" class="form-label">Subject Name:</label>
                                <input v-model="subjectName" required class="form-control" id="subjectName" />
                              </div>
                              <div class="mb-3">
                                <label for="courseName" class="form-label">Course Name:</label>
                                <select v-model="courseName" required class="form-select" id="courseName">
                                  <option v-for="course in courses" :key="course.course_id">{{ course.course_name }}</option>
                                </select>
                              </div>
                              <button type="submit" class="btn btn-primary">Add Subject</button>
                            </form><!-- End floating Labels Form -->
                          </div>
                        </div>
                        <!-- End floating Labels Form -->

                        <!-- Floating Labels Form -->
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Add Topic</h5>
                            <form class="row g-3" @submit.prevent="addTopic">
                              <div class="mb-3">
                                <label for="topicName" class="form-label">Topic Name:</label>
                                <input v-model="topicName" required class="form-control" id="topicName" />
                              </div>
                              <div class="mb-3">
                                <label for="subjectNameForTopic" class="form-label">Subject Name:</label>
                                <select v-model="subjectNameForTopic" required class="form-select" id="subjectNameForTopic">
                                  <option v-for="subject in subjects" :key="subject.subject_id">{{ subject.subject_name }}</option>
                                </select>
                              </div>
                              <button type="submit" class="btn btn-primary">Add Topic</button>
                            </form><!-- End floating Labels Form -->
                          </div>
                        </div>
                        <!-- End floating Labels Form -->

                        <!-- Floating Labels Form -->
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Add Discussion</h5>
                            <form class="row g-3" @submit.prevent="addDiscussion">
                              <div class="mb-3">
                              <label for="contentType" class="form-label">Content Type:</label>
                              <input v-model="contentType" required class="form-control" id="contentType" />
                            </div>
                            <div class="mb-3">
                              <label for="contentTitle" class="form-label">Content Title:</label>
                              <input v-model="contentTitle" required class="form-control" id="contentTitle" />
                            </div>
                            <div class="mb-3">
                              <label for="contentData" class="form-label">Content Data:</label>
                              <textarea v-model="contentData" required class="form-control" id="contentData" style="height: 200px;"></textarea>
                            </div>
                            <!-- Add the input field for image upload -->
                              <div class="mb-3">
                                <label for="image" class="form-label">Upload Image:</label>
                                <input type="file" accept="image/*" @change="handleImageUpload" class="form-control" id="image" />
                              </div>
                            <div class="mb-3">
                              <label for="contentLink" class="form-label">Content Link:</label>
                              <input
                                v-model="contentLink"
                                
                                class="form-control"
                                id="contentLink"
                                placeholder="Enter a valid link"
                                pattern="https?://.+"
                                title="Please enter a valid URL starting with 'http://' or 'https://'"
                              />
                              
                            </div>
                            <div class="mb-3">
                              <label for="topicNameForDiscussion" class="form-label">Topic Name:</label>
                              <select v-model="topicNameForDiscussion" required class="form-select" id="topicNameForDiscussion">
                                <option v-for="topic in topics" :key="topic.topic_id">{{ topic.topic_name }}</option>
                              </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Add Discussion</button>
                            </form><!-- End floating Labels Form -->
                          </div>
                        </div>
                      </div>
                        <!-- End floating Labels Form -->


                      <div class="container-fluid px-4" id="updateSection">
                        <h1 class="mt-4">Update</h1>
                        <section class="section">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Table with hoverable rows</h5>

                              <v-dialog v-model="dialog" max-width="600">
                                <v-card>
                                  <v-card-title class="headline">
                                    Discussion Details
                                  </v-card-title>
                                  <v-card-text>
                                    <v-form ref="form">
                                      <v-text-field label="Subject ID" v-model="editedDiscussion.subject_id"></v-text-field>
                                      <v-text-field label="Subject Name" v-model="editedDiscussion.subject_name"></v-text-field>
                                      <v-text-field label="Topic Name" v-model="editedDiscussion.topic_name"></v-text-field>
                                      <v-text-field label="Title" v-model="editedDiscussion.content_title"></v-text-field>
                                      <v-textarea label="Discussion" v-model="editedDiscussion.content_data"></v-textarea>

                                      <!-- Display the image if it exists -->
                                      <v-row v-if="editedDiscussion.content_image !== null && editedDiscussion.content_image !== undefined">
                                        <v-col cols="12">
                                          <h5>Image</h5>
                                          <img
                                            :src="editedDiscussion.content_image || require('@/assets/img/def.png')"
                                            alt="Discussion Image"
                                            class="discussion-image"
                                            @click="triggerImageInput"
                                          />
                                          <!-- Input for uploading a new image -->
                                          <input type="file" ref="imageInput" style="display: none" @change="handleImageUpload" accept="image/*"/>

                                        </v-col>
                                      </v-row>

                                      <v-text-field label="Link" v-model="editedDiscussion.content_link"></v-text-field>
                                    </v-form>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-btn color="primary" @click="updateSTD">Save</v-btn>
                                    <v-btn color="primary" @click="dialog = false">Close</v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>


                              <!-- Table with hoverable rows -->
                              <table class="table table-hover">
                                <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Subject Name</th>
                                    <th scope="col">Topic Name</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Discussion</th>
                                    <th scope="col">Images</th>
                                    <th scope="col">Link</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="item in stdData" :key="item.discussion_id" @click="openModal(item)">
                                    <td>{{ item.subject_id }}</td>
                                    <td>{{ item.subject_name }}</td>
                                    <td>{{ item.topic_name }}</td>
                                    <td>{{ item.content_title }}</td>
                                    <td class="ellipsis">{{ item.content_data }}</td>
                                    <td>
                                      <!-- Displaying discussion image with a default image if not available -->
                                      <img :src="item.content_image || require('@/assets/img/def.png')" alt="Discussion Image" class="discussion-image" />
                                    </td>
                                    <td class="ellipsis">{{ item.content_link }}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <!-- End Table with hoverable rows -->

                            </div>
                          </div>
                        </section>
                      </div>
                    

                    
                    
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2023</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

</div>

</template>

<script>
import axios from 'axios';


import { defineComponent } from 'vue';

import Bootstrap from '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import Scripts from '@/assets/admin_style/js/scripts.js';
import All from '@/assets/admin_style/js/all.js';

export default defineComponent({

  data() {
      return {
        subjectName: "",
        courseName: "",
        topicName: "",
        subjectNameForTopic: "",
        contentType: "",
        contentTitle: "",
        contentData: "",
        contentLink: "",
        topicNameForDiscussion: "",
        courses: [], // Array to store existing courses
        subjects: [], // Array to store existing subjects
        topics: [], // Array to store existing topics
        teacher: [],
        dialog: false,
        selectedDiscussion: null,
        editedDiscussion: null,
        stdData: [],
        image: null,
        imageFile: null,
        teacherId: null,
        
      };
    },

  created(){
    console.log(Bootstrap);
    console.log(Scripts);
    console.log(All);
    //


    this.teacherId = localStorage.getItem('teacher_id');
      // Fetch existing courses, subjects, and topics when the component is created
      this.getCourseByTeacherId();
      this.getSubjectsByTeacherId();
      this.getTopicsByTeacherId();
      this.getTeacherData();
      
      // this.fetchSubjects();
      // this.fetchTopics();
  },

  mounted(){
    this.fetchSTDData();
  },

  

  methods: {


    openModal(discussion) {
      this.selectedDiscussion = discussion;
      // Create a deep copy of the discussion object for editing
      this.editedDiscussion = JSON.parse(JSON.stringify(discussion));
      this.dialog = true;
    },

    updateSTD() {
  // Create a FormData object
  const formData = new FormData();

  // Append necessary data to the FormData object
  formData.append('discussion_id', this.editedDiscussion.discussion_id);
  formData.append('subject_name', this.editedDiscussion.subject_name);
  formData.append('topic_name', this.editedDiscussion.topic_name);
  formData.append('content_title', this.editedDiscussion.content_title);
  formData.append('content_data', this.editedDiscussion.content_data);
  formData.append('content_link', this.editedDiscussion.content_link);

  // Check if there is a new image to upload
  if (this.imageFile) {
    formData.append('image', this.imageFile);
  }

  // Make a POST request to update the discussion
  axios.post('teacher/updateSTD', formData)
    .then(response => {
      console.log(response.data);

      // Optionally, you can update the local data instead of reloading the entire page
      const index = this.stdData.findIndex(item => item.discussion_id === this.editedDiscussion.discussion_id);
      if (index !== -1) {
        // Update the local data with the new values
        this.$set(this.stdData, index, response.data.updatedDiscussion);
      }

      // Close the dialog after successful update
      this.dialog = false;
      // window.location.reload(); // Consider reloading the page if necessary
    })
    .catch(error => {
      console.error(error);
      // Handle the error appropriately
    });
},


    triggerImageInput() {
      // Trigger the file input when the image is clicked
      this.$refs.imageInput.click();
    },




      // Function to fetch existing courses
      // fetchCourses() {
      //   axios.get("teacher/getCourseByTeacherId/${this.teacherId}") // Replace with your actual API endpoint
      //     .then(response => {
      //       this.courses = response.data;
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // },
      async fetchSTDData() {
        try {
          const response = await axios.get(`teacher/getSTD/${this.teacherId}`);
          this.stdData = response.data.STD;

        } catch (error) {
          console.error('Error fetching STD Data:', error);
        }
      },

      async getTeacherData() {
        try {
          const response = await axios.get(`getTeacherData/${this.teacherId}`);
          this.teacher = { username: response.data[0].username };
        } catch (error) {
          console.error('Error fetching Teacher Data:', error);
        }
      },

      async getCourseByTeacherId() {
      try {
        const response = await axios.get(`teacher/getCourseByTeacherId/${this.teacherId}`);
        this.courses = response.data;
        // this.subjects = response.data;
        // this.topics = response.data;
        
      } catch (error) {
        console.error('Error fetching subjects by studentId:', error);
      }
    },

    async getSubjectsByTeacherId() {
      try {
        const response = await axios.get(`teacher/getSubjectsByTeacherId/${this.teacherId}`);
        
        this.subjects = response.data;
        
        
      } catch (error) {
        console.error('Error fetching subjects by studentId:', error);
      }
    },

    async getTopicsByTeacherId() {
      try {
        const response = await axios.get(`teacher/getTopicsByTeacherId/${this.teacherId}`);
        
        this.topics = response.data;
        
        
      } catch (error) {
        console.error('Error fetching subjects by studentId:', error);
      }
    },
      // // Function to fetch existing subjects
      // fetchSubjects() {
      //   axios.get("teacher/subjects") // Replace with your actual API endpoint
      //     .then(response => {
      //       this.subjects = response.data;
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // },
      // // Function to fetch existing topics
      // fetchTopics() {
      //   axios.get("teacher/topics") // Replace with your actual API endpoint
      //     .then(response => {
      //       this.topics = response.data;
      //     })
      //     .catch(error => {
      //       console.error(error);
      //     });
      // },
      async addSubject() {
        // Make API request to add subject
        // Example using axios:
        try {
            const response = await axios.post(`teacher/addSubject/${this.teacherId}`, {
                subject_name: this.subjectName,
                course_name: this.courseName,
            });

            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
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
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
      },


      addDiscussion() {
        const formData = new FormData();
        formData.append('content_type', this.contentType);
        formData.append('content_title', this.contentTitle);
        formData.append('content_data', this.contentData);
        formData.append('content_link', this.contentLink);
        formData.append('topic_name', this.topicNameForDiscussion);
        formData.append('image', this.imageFile);

        axios.post('teacher/addDiscussion', formData)
          .then(response => {
            console.log(response.data);
            window.location.reload(); // Reload the page after successful submission
          })
          .catch(error => {
            console.error(error);
            // Handle the error appropriately
          });
      },
      handleImageUpload(event) {
        this.imageFile = event.target.files[0];
      },
  }

});



</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css');
@import '../assets/admin_style/css/styles.css';


.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px; /* Adjust the max-width as needed */
  }

  .discussion-image {
  max-width: 100px; /* Adjust the max-width as needed */
  max-height: 100px; /* Adjust the max-height as needed */
  object-fit: cover; /* Adjust the object-fit property as needed */
}

</style>
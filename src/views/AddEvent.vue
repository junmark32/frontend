<template v-if="isAdminOrTeacher">
    <div>
        <h2>Add New Event</h2>
        <form @submit.prevent="AddEvent">
            <label>Event Title:</label>
            <input v-model="newEvent.title" type="text" id="title" name="title" required><br>

            <label>Event Date:</label>
            <input v-model="newEvent.date" type="date" id="date" name="date" required><br>

            <label>Event Location:</label>
            <input v-model="newEvent.location" type="text" id="location" name="location" required><br>

            <button type="submit">Add Event</button>


        </form>
    </div>
</template>

<script>
import axios from 'axios';



export default {
    data() {
        return {
            newEvent: {
                title: "",
                date: "",
                location: ""
            }
        };
    },
    methods: {
        AddEvent() {
            this.$axios.post(this.newEvent)
                .then(response => {
                    // Handle the response (e.g., show a success message)
                    console.log('Event added successfully:', response.data);

                    // Optionally, you might want to redirect or update the list of events
                })
                .catch(error => {
                    // Handle errors (e.g., show an error message)
                    console.error('Error adding event:', error);
                });
        }
    }
}
</script>
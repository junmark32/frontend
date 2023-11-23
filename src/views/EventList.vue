<template>
    <div>
        <h2>Upcoming Events</h2>
        <ul>
            <li v-for="event in events">
                <strong>{{ event.title }}</strong> - Date: {{ event.date }}, Location: {{ event.Location }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
 
export default {
    data() {
        return {
            events: []
        };
    },
    created() {
        this.$axios.get()
            .then(response => {
                // Update the events data with the response
                this.events = response.data;
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }
}
</script>

<template>
  <div class="about">
    <h1>All Bookings</h1>
    <div v-for="booking in bookings" v-bind:key="booking.id">
      <h3>First Name: {{ booking.first_name }}</h3>
      <h3>Last Name: {{ booking.last_name }}</h3>
      <h3>Animal First Name: {{ booking.animal_first }}</h3>
      <h3>Animal Last Name: {{ booking.animal_last }}</h3>
      <h3>Animal Type: {{ booking.animal_type }}</h3>
      <h3>Hours Requested: {{ booking.hours_rq }}</h3>
      <h3>Date of Service: {{ booking.date_of_service }}</h3>
    </div>
  </div>
</template>
<style></style>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data: function () {
    return {
      bookings: [],
      newBookingFirstName: "",
      newBookingLastName: "",
      newBookingAnimalFirst: "",
      newBookingAnimalLast: "",
      newBookingAnimalType: "",
      newBookingHoursRq: null,
      newBookingDateOfService: "",
    };
  },
  created: function () {
    this.indexBookings();
  },
  methods: {
    indexBookings: function () {
      axios.get("/api/bookings").then((response) => {
        this.bookings = response.data;
        console.log("All Bookings:", this.bookings);
      });
    },
  },
};
</script>

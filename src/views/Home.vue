<template>
  <div class="home">
    <div>
      <h1>New Booking</h1>
      First Name:
      <input type="text" v-model="newBookingFirstName" />
      Last Name:
      <input type="text" v-model="newBookingLastName" />
      Animal First Name:
      <input type="text" v-model="newBookingAnimalFirst" />
      Animal Last Name:
      <input type="text" v-model="newBookingAnimalLast" />
      Animal Type:
      <input type="text" v-model="newBookingAnimalType" />
      Hours Requested:
      <input type="number" v-model.number="newBookingHoursRq" />
      Date of Service:
      <input type="text" v-model="newBookingDateOfService" />
      <button v-on:click="createBooking()">Create</button>
    </div>
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
    createBooking: function () {
      console.log("createBooking");
      var params = {
        first_name: this.newBookingFirstName,
        last_name: this.newBookingLastName,
        animal_first: this.newBookingAnimalFirst,
        animal_last: this.newBookingAnimalLast,
        animal_type: this.newBookingAnimalType,
        hours_rq: this.newBookingHoursRq,
        date_of_service: this.newBookingDateOfService,
      };
      axios
        .post("/api/bookings", params)
        .then((response) => {
          console.log("Success", response.data);
          this.bookings.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

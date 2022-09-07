<template>
  <div class="about">
    <h1>All Bookings</h1>
    <div v-for="booking in bookings" v-bind:key="booking.id">
      <h3>Client Name: {{ booking.last_name }}, {{ booking.first_name }}</h3>
      <h3>Booking ID: {{ booking.id }}</h3>

      <div>
        <button v-on:click="showBooking(booking)">More info</button>
      </div>
      <br />
    </div>
    <dialog id="booking-details">
      <form method="dialog">
        <h1>Booking info</h1>
        <p>First Name: {{ currentBooking.first_name }}</p>
        <p>Last Name: {{ currentBooking.last_name }}</p>
        <p>Animal First Name: {{ currentBooking.animal_first }}</p>
        <p>Animal Last Name: {{ currentBooking.animal_last }}</p>
        <p>Animal Type: {{ currentBooking.animal_type }}</p>
        <p>Hours Requested: {{ currentBooking.hours_rq }}</p>
        <p>Date of Service: {{ currentBooking.date_of_service }}</p>
        <button>Close</button>
      </form>
    </dialog>
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
      currentBooking: {},
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
    showBooking: function (booking) {
      console.log("showBooking", booking.first_name, booking);
      this.currentBooking = booking;
      document.querySelector("#booking-details").showModal();
    },
  },
};
</script>

<template>
  <div class="home">
    <div>
      <h1>New Booking Form</h1>
      First Name:
      <input type="text" v-model="newBookingFirstName" />
      <br />
      Last Name:
      <input type="text" v-model="newBookingLastName" />
      <br />
      Animal First Name:
      <input type="text" v-model="newBookingAnimalFirst" />
      <br />
      Animal Last Name:
      <input type="text" v-model="newBookingAnimalLast" />
      <br />
      Animal Type:
      <select v-model="newBookingAnimalType">
        <option disabled value="">Please select an Animal Type</option>
        <option>Cat</option>
        <option>Dog</option>
        <option>Other</option>
      </select>
      <br />
      Hours Requested:
      <input type="number" v-model.number="newBookingHoursRq" />
      <br />
      Date of Service:
      <input type="date" v-model="newBookingDateOfService" />
      <br />
      <button v-on:click="createBooking()">Create</button>
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
          this.newBookingFirstName = "";
          this.newBookingLastName = "";
          this.newBookingAnimalFirst = "";
          this.newBookingAnimalLast = "";
          this.newBookingAnimalType = "";
          this.newBookingHoursRq = null;
          this.newBookingDateOfService = "";
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

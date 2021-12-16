<template>
  <div class="min-h-screen flex items-center justify-center bg-blue-200">
    <div class="bg-white py-4 px-10 rounded-xl shadow-lg">
      <h2 class="text-xl font-bold mb-3 text-gray-600">
        Book your appointment
      </h2>
      <form class="space-y-5" action="">
        <div class="input-field">
          <label class="" for="first_name">First Name</label
          ><input
            class=""
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div class="input-field">
          <label for="last_name">Last Name</label
          ><input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last name"
          />
        </div>
        <div class="input-field">
          <label for="phone">Phone</label
          ><input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
        </div>
        <div class="input-field">
          <label for="email">Email</label
          ><input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div class="input-field">
          <label for="date">Date of Appointment</label
          ><input
            type="date"
            name="date"
            id="date"
            placeholder="Date and time"
          />
        </div>
        <div class="input-field">
          <button class="" type="submit">Book</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-field label {
  @apply block mb-1 text-gray-500 font-bold;
}
.input-field input {
  @apply w-full border-2 border-gray-400 p-2 rounded outline-none;
  @apply focus:border-blue-700;
  @apply transition duration-300;
}
.input-field button {
  @apply w-full bg-yellow-400 p-3 rounded-lg text-purple-900;
  @apply hover:bg-yellow-500;
  @apply transition duration-300;
}
</style>

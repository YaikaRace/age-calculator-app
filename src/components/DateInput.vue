<template>
  <div>
    <div>
      <div class="flex justify-around sm:justify-start">
        <base-input
          @inputnum="(v) => (day = v)"
          :error="dayError"
          :invalid-date="error"
          :empty="dayEmpty"
          :max="31"
          class="sm:mr-8"
          >Day</base-input
        >
        <base-input
          @inputnum="(v) => (month = v)"
          :error="monthError"
          :invalid-date="error"
          :empty="monthEmpty"
          :max="12"
          class="sm:mr-8"
          >Month</base-input
        >
        <base-input
          @inputnum="(v) => (year = v)"
          :error="yearError"
          :invalid-date="error"
          :empty="yearEmpty"
          :max="new Date().getFullYear()"
          class="sm:mr-8"
          >Year</base-input
        >
      </div>
      <p
        class="text-[0.5rem] text-light-red px-3"
        v-if="error"
      >
        Must be a valid date
      </p>
    </div>
    <arrow-button @pressed="calculateAge()" />
  </div>
</template>

<script>
  import BaseInput from "./BaseInput.vue";
  import ArrowButton from "./ArrowButton.vue";

  export default {
    name: "DateInput",
    components: {
      BaseInput,
      ArrowButton,
    },
    data() {
      return {
        day: null,
        month: null,
        year: null,
        error: false,
        dayError: false,
        monthError: false,
        yearError: false,
        dayEmpty: false,
        monthEmpty: false,
        yearEmpty: false,
        months: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      };
    },
    methods: {
      validateAge() {
        if (parseInt(this.day) > 31) {
          this.dayError = true;
        }
        if (this.month > 12) {
          this.monthError = true;
        }
        if (this.year > new Date().getFullYear()) {
          this.yearError = true;
        }
        if (this.day == 0 || this.day == "" || this.day == null) {
          this.dayEmpty = true;
        }
        if (this.month == 0 || this.month == "" || this.month == null) {
          this.monthEmpty = true;
        }
        if (this.year == 0 || this.year == "" || this.year == null) {
          this.yearEmpty = true;
        }
        if (
          parseInt(this.day) > this.months[this.month - 1] &&
          !this.hasErrors
        ) {
          this.error = true;
        }
      },
      calculateAge() {
        this.resetErrors();
        this.validateAge();
        if (this.hasErrors) {
          return;
        }
        let today = new Date();
        let age = {
          days: 0,
          months: 0,
          years: 0,
        };
        age.years = today.getFullYear() - this.year;
        age.months = today.getMonth() + 1 - this.month;
        age.days = today.getDate() - this.day;
        if (age.days < 0) {
          age.months--;
          age.days += new Date(this.year, this.month - 1, 0).getDate();
        }
        if (age.months < 0) {
          age.years--;
          age.months += 12;
        }
        this.$emit("calculated", age);
      },
      resetErrors() {
        this.dayError = false;
        this.monthError = false;
        this.yearError = false;
        this.dayEmpty = false;
        this.monthEmpty = false;
        this.yearEmpty = false;
        this.error = false;
      },
    },
    computed: {
      hasErrors() {
        return (
          this.dayError ||
          this.monthError ||
          this.yearError ||
          this.dayEmpty ||
          this.monthEmpty ||
          this.yearEmpty ||
          this.error
        );
      },
    },
  };
</script>
